<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class Users extends REST_Controller {

    function __construct($config = 'rest') {
        parent::__construct($config);
        $this->load->database();
    }

    function index_get() {
        $id = $this->get('id');
        if($id == null){
            $this->db->select('*');
            $user = $this->db->get('tbl_user')->result();
            $this->response($user, 200); 
        }else{
            $this->db->select('id');
            $this->db->select('username');
            $this->db->select('password');
            $this->db->where('id', $id);
            $user = $this->db->get('tbl_user')->result();
        if($user == null){
            echo "Data Tidak Ada";
        }else{
            $this->response($user, 200); 
        }
        }
    }

    function index_post() {
        $data = array(
                    'username'     => $this->post('username'),
                    'password'    => $this->post('password'));
        $insert = $this->db->insert('tbl_user', $data);
        if ($insert) {
            $this->response($data, 200);
        } else {
            $this->response(array('status' => 'fail', 502));
        }
    }

    function index_put() {
        $id = $this->put('id');
        $data = array(
                    'id'       => $this->put('id'),
                    'username'     => $this->put('username'),
                    'password'    => $this->put('password'));
        $this->db->where('id', $id);
        $update = $this->db->update('tbl_user', $data);
        if ($update) {
            $this->response($data, 200);
        } else {
            $this->response(array('status' => 'fail', 502));
        }
    }

    function index_delete() {
        $id = $this->delete('id');
        $this->db->where('id', $id);
        $delete = $this->db->delete('tbl_user');
        if ($delete) {
            $this->response(array('status' => 'success'), 201);
        } else {
            $this->response(array('status' => 'fail', 502));
        }
    }
    
   

    //Masukan function selanjutnya disini
}
?>