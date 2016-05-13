<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Builder_model extends CI_Model {

	public function table_action($data, $sts)
	{
		if($sts == 0){
			$this->db->insert('form_lists',$data);
			$query = $this->db->insert_id();
		}else if($sts == 1){
			$query = $this->db->insert_batch('form_details',$data);
		}else if($sts == 2){
			$this->db->where('fl_delete_flag',0);
			$this->db->order_by('fl_created_date DESC');
			$query = $this->db->get('form_lists');
		}else if($sts == 3){
			$query = $this->db->update('form_lists',$data,array('fl_ref'=>$data['fl_ref']));
		}else if($sts == 4){
			$this->db->where('fl_ref',$data);
			$this->db->where('fl_delete_flag',0);
			$query = $this->db->get('form_lists');
		}else if($sts == 5){
            $this->db->select('fd_label, fd_name, fd_type, required, maxlength, options');
			$this->db->where('fl_id',$data);
			$query = $this->db->get('form_details');
		}
		return $query;
	}
}