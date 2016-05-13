<div class="container">
	 <!-- main content -->
	 	
	 
	 <!-- row -->
	 <div class="row">	 
	 	<div class="span12">
			<h3>Gopi :: CI Builder</h3>
			Create online forms using CodeIgniter
		</div>
	 </div>
	 <!-- row end -->

	<div class="page-header"><a href="<?=base_url('code_builder')?>" class="btn btn-default">< Back to Home</a></div>
	<div class="row">
		<div class="span12">
			<?php
			echo form_open('code_builder/generate/'.$fl_ref);
			foreach($details->result() as $row):
				$maxlength = ($row->maxlength!=0) ? $row->maxlength : '';
				switch ($row->fd_type) {
					case 'textarea':
						echo form_label($row->fd_label.':');
						$fi = array(
				              'name'        => $row->fd_name,
				              'id'          => $row->fd_name,
				              'rows'   => "6",
				              'cols'   => "6",
				              'placeholder' => $row->fd_label,
				              'type'   => $row->fd_type,
				              'style'       => 'width:50%',
				            );
						echo form_textarea($fi);


						break;
					case 'select':
						$so = json_decode($row->options,true);
						echo form_label($row->fd_label.':');
						$options = array();
						for ($i=0; $i < count($so); $i++) { 
						    $options[$so[$i]] = $so[$i];
						}
						echo form_dropdown($row->fd_name, $options, $so[0], 'style=width:50%');
						break;
					case 'radio':
						$ro = json_decode($row->options,true);
						echo form_label($row->fd_label.':');
						for ($i=0; $i < count($ro); $i++) { 
							echo form_label($ro[$i]);
							$data = array(
							    'name'        => $row->fd_name,
							    'value'       => $ro[$i],
							    'style'       => 'margin:10px',
							    'type'   => $row->fd_type,
						    );
							echo form_checkbox($data);
						}
						break;
					case 'checkbox':
						$co = json_decode($row->options,true);
						echo form_label($row->fd_label.':');

						for ($i=0; $i < count($co); $i++) { 
							echo form_label($co[$i]);
							$data = array(
							    'name'        => $row->fd_name.'[]',
							    'value'       => $co[$i],
							    'style'       => 'margin:10px',
							    'type'   => $row->fd_type,
						    );
							echo form_checkbox($data);
						}
						break;
					default:
						echo form_label($row->fd_label.':');
						$fi = array(
				              'name'        => $row->fd_name,
				              'id'          => $row->fd_name,
				              'value'       => '',
				              'maxlength'   => $maxlength,
				              'placeholder' => $row->fd_label,
				              'type'   => $row->fd_type,
				               'style'       => 'width:50%',
				            );
						echo form_input($fi);	
						break;
				}
				echo form_error($row->fd_name);
			endforeach;
			echo "<br/>";
			echo form_submit(array('class' =>'btn btn-success','value' =>'Submit'));
			echo form_close();
			?>

		</div>
		<div class="page-header">Controller:</div>
		<div class="span12">
		<pre>
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
		$this->form_validation->set_error_delimiters('&lt;div class="text-error"&gt;', '&lt;div&gt;');
		}
		endforeach;
		if ($this->form_validation->run() == FALSE){}
		$this->data['page'] = 'generate';
		$this->load->vars($this->data);
		$this->load->view('template');
		}
		}

		</pre>
		</div>

		<div class="page-header">View:</div>
		<div class="span12">
		<pre>
		echo form_open('code_builder/generate/'.$fl_ref);
		foreach($details->result() as $row):
		$maxlength = ($row->maxlength!=0) ? $row->maxlength : '';
		switch ($row->fd_type) {
		case 'textarea':
		echo form_label($row->fd_label.':');
		$fi = array(
		'name'        => $row->fd_name,
		'id'          => $row->fd_name,
		'rows'   => "6",
		'cols'   => "6",
		'placeholder' => $row->fd_label,
		'type'   => $row->fd_type,
		'style'       => 'width:50%',
		);
		echo form_textarea($fi);


		break;
		case 'select':
		$so = json_decode($row->options,true);
		echo form_label($row->fd_label.':');
		$options = array();
		for ($i=0; $i < count($so); $i++) { 
		$options[$so[$i]] = $so[$i];
		}
		echo form_dropdown($row->fd_name, $options, $so[0], 'style=width:50%');
		break;
		case 'radio':
		$ro = json_decode($row->options,true);
		echo form_label($row->fd_label.':');
		for ($i=0; $i < count($ro); $i++) { 
		echo form_label($ro[$i]);
		$data = array(
		'name'        => $row->fd_name,
		'value'       => $ro[$i],
		'style'       => 'margin:10px',
		'type'   => $row->fd_type,
		);
		echo form_checkbox($data);
		}
		break;
		case 'checkbox':
		$co = json_decode($row->options,true);
		echo form_label($row->fd_label.':');

		for ($i=0; $i < count($co); $i++) { 
		echo form_label($co[$i]);
		$data = array(
		'name'        => $row->fd_name.'[]',
		'value'       => $co[$i],
		'style'       => 'margin:10px',
		'type'   => $row->fd_type,
		);
		echo form_checkbox($data);
		}
		break;
		default:
		echo form_label($row->fd_label.':');
		$fi = array(
		'name'        => $row->fd_name,
		'id'          => $row->fd_name,
		'value'       => '',
		'maxlength'   => $maxlength,
		'placeholder' => $row->fd_label,
		'type'   => $row->fd_type,
		'style'       => 'width:50%',
		);
		echo form_input($fi);	
		break;
		}
		echo form_error($row->fd_name);
		endforeach;
		echo "br";
		echo form_submit(array('class' =>'btn btn-success','value' =>'Submit'));
		echo form_close();
		</pre>
		
		</div>
	</div>
	<div class="page-header"></div>
</div>