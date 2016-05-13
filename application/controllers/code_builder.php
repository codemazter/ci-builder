<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Code_builder extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('builder_model');
		$this->load->helper(array('form', 'url'));
		$this->load->library('form_validation');
	}

	public function index()
	{
		$this->data['page'] = 'index';
		$this->data['fl'] = $this->builder_model->table_action(0,2);
		$this->load->vars($this->data);
		$this->load->view('template');
	}

	public function create()
	{
		$this->load->view('builder_template');
	}

	public function insert_form()
	{
		$json = $this->input->post('json_data');
		if(empty($json)) redirect(base_url('code_builder'));
		$array = json_decode($json, true);
		$time = date('Y-m-d h:i:s');
		if(isset($array['fields']) && count($array['fields']) !=0){
			$form['fl_ref'] = date('Ymdhis');
			$form['fl_name'] = $array['label'];
			$form['fl_des'] = $array['description'];
			$form['fl_submit'] = $array['submit_text'];
			$form['fl_url'] = '';
			$form['fl_created_date'] = $time;
			//insert form lists
			$ins_id = $this->builder_model->table_action($form,0);
			$fields = $array['fields'];
			$main_arr = array();

			//echo print_r($fields,true);
			for ($i=0; $i < count($fields); $i++) { 
				if($fields[$i]['type']!='submit'){
					$fd_type = $fields[$i]['type'];
					$fd_label = $fields[$i]['label'];

					if($fd_type == "text" && strtolower($fd_label) == "email" || $fd_type == "text" && strtolower($fields[$i]['title']) == "email"){
						$fd_type = 'email';
					}else if($fd_type == "text" && strtolower($fd_label) == "password" || $fd_type == "text" && strtolower($fields[$i]['title']) == "password"){
						$fd_type = 'password';
					}else if($fd_type == "text" && strtolower($fd_label) == "number" || $fd_type == "text" && strtolower($fields[$i]['title']) == "number"){
						$fd_type = 'number';
					}

					$options = array();

					if(isset($fields[$i]['option'])){
						$option = $fields[$i]['option'];
						for ($l=0; $l < count($option); $l++) { 
							$options[] = $option[$l]['text'];
						}
					}

					if(isset($fields[$i]['checkbox'])){
						$checkbox = $fields[$i]['checkbox'];
						for ($j=0; $j < count($checkbox); $j++) { 
							$options[] = $checkbox[$j]['text'];
						}
					}

					if(isset($fields[$i]['radio'])){
						$radio = $fields[$i]['radio'];
						for ($k=0; $k < count($radio); $k++) { 
							$options[] = $radio[$k]['text'];
						}
					}
					$maxlength = (isset($fields[$i]['maxlength'])) ? $fields[$i]['maxlength'] : '';
					$fd_name = str_replace(" ", "", $fields[$i]['label']);
					$fd_name = strtolower($fd_name);
					$sub_arr = array("fl_id"=> $ins_id,
						"fd_label"=> $fd_label,
						"fd_name"=> $fd_name,
						"fd_type"=> $fd_type,
						"required"=> $fields[$i]['required'],
						"maxlength"=> $maxlength,
						"options"=> json_encode($options),
						"created_date"=>$time);

					$main_arr[] = $sub_arr;
				}
			}
			if(!empty($main_arr)){
				//insert form details
				$this->builder_model->table_action($main_arr,1);	
			}
			echo $form['fl_ref'];
		}
	}

	public function generate()
	{
		$fl_ref = $this->data['fl_ref'] = $this->uri->segment(3);
		if(!empty($fl_ref)){
			$lists = $this->builder_model->table_action($fl_ref,4);
			if($lists->num_rows()==0){
				redirect(base_url('code_builder'));
			}
			$lists = $lists->row();
			$this->data['details'] = $details = $this->builder_model->table_action($lists->fl_id,5);

			foreach($details->result() as $row):
				if($row->required!='false'){
					$required = 'trim|required';
					if($row->fd_type=='email'){
						$required .= '|valid_email';
					}
					if($row->maxlength!=0){
						$required .= '|max_length['.$row->maxlength.']';
					}
					$this->form_validation->set_rules($row->fd_name, $row->fd_label, $required);
					$this->form_validation->set_message($row->fd_name);
					$this->form_validation->set_error_delimiters('<div class="text-error">', '</div>');
				}
			endforeach;
			if ($this->form_validation->run() == FALSE){}
			$this->data['page'] = 'generate';
			$this->load->vars($this->data);
			$this->load->view('template');
		}
	}

	public function delete_form()
	{
		$data['fl_ref'] = $this->uri->segment(3);
		if(!empty($data['fl_ref'])){
			$data['fl_delete_flag'] = 1;
			$this->builder_model->table_action($data,3);
		}
		redirect(base_url('code_builder'));
	}
}