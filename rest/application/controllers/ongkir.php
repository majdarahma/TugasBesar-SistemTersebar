<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class Ongkir extends REST_Controller {

    function __construct($config = 'rest') {
        parent::__construct($config);
        $this->load->database();
    }

    function index_get() {
        $id = $this->get('id');
        if($id == null){
            $this->db->select('*');
            $ongkir = $this->db->get('tbl_ongkir')->result();
            $this->response($ongkir, 200); 
        }else{
            $this->db->select('id_ongkir');
            $this->db->select('nama_kota');
            $this->db->select('tarif');
            $this->db->where('id_ongkir', $id);
            $ongkir = $this->db->get('tbl_ongkir')->result();
        if($ongkir == null){
            echo "Data Tidak Ada";
        }else{
            $this->response($ongkir, 200); 
        }
        }
    }

    function index_post() {
        $data = array(
                    'nama_kota'     => $this->post('nama_kota'),
                    'tarif'    => $this->post('tarif'));
        $insert = $this->db->insert('tbl_ongkir', $data);
        if ($insert) {
            $this->response($data, 200);
        } else {
            $this->response(array('status' => 'fail', 502));
        }
    }

    function index_put() {
        $id = $this->put('id');
        $data = array(
                    'id_ongkir'       => $this->put('id'),
                    'nama_kota'     => $this->put('nama_kota'),
                    'tarif'    => $this->put('tarif'));
        $this->db->where('id_ongkir', $id);
        $update = $this->db->update('tbl_ongkir', $data);
        if ($update) {
            $this->response($data, 200);
        } else {
            $this->response(array('status' => 'fail', 502));
        }
    }

    function index_delete() {
        $id = $this->delete('id');
        $this->db->where('id_ongkir', $id);
        $delete = $this->db->delete('tbl_ongkir');
        if ($delete) {
            $this->response(array('status' => 'success'), 201);
        } else {
            $this->response(array('status' => 'fail', 502));
        }
    }
    
   

    //Masukan function selanjutnya disini
}
?>