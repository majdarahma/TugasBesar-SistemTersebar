<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Forms_m extends CI_Model {

    public function simpan($table, $data){
		//pastikan nama index post yang dipanggil sama seperti di form input
		
		$query = $this->db->insert($table, $data);
    return $this->db->insert_id();
		
		
			
	}
	
   
}
