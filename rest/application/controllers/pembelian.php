<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class Pembelian extends REST_Controller {

    function __construct($config = 'rest') {
        parent::__construct($config);
        $this->load->database();
    }

    function index_get() {
        $id = $this->get('id');
        if($id == null){
            $this->db->select('*');
            $pembelian = $this->db->get('tbl_pembelian')->result();
            $this->response($pembelian, 200); 
        }else{
            $this->db->select('id_pembelian');
            $this->db->select('id_pelanggan');
            $this->db->select('total_pembelian');
            $this->db->select('id_ongkir');
            $this->db->where('id_pembelian', $id);
            $pembelian = $this->db->get('tbl_pembelian')->result();
        if($pembelian == null){
            echo "Data Tidak Ada";
        }else{
            $this->response($pembelian, 200); 
        }
        }
    }

    function index_post() {
        $data = array(
                    'id_pelanggan'     => $this->post('id_pelanggan'),
                    'total_pembelian'    => $this->post('total_pembelian'),
                    'id_ongkir'    => $this->post('id_ongkir'));
        $insert = $this->db->insert('tbl_pembelian', $data);
        if ($insert) {
            $this->response($data, 200);
        } else {
            $this->response(array('status' => 'fail', 502));
        }
    }

    function index_put() {
        $id = $this->put('id');
        $data = array(
            'id_pelanggan'     => $this->put('id_pelanggan'),
            'total_pembelian'    => $this->put('total_pembelian'),
            'id_ongkir'    => $this->put('id_ongkir'));
        $this->db->where('id_pembelian', $id);
        $update = $this->db->update('tbl_pembelian', $data);
        if ($update) {
            $this->response($data, 200);
        } else {
            $this->response(array('status' => 'fail', 502));
        }
    }

    function index_delete() {
        $id = $this->delete('id');
        $this->db->where('id_pembelian', $id);
        $delete = $this->db->delete('tbl_pembelian');
        if ($delete) {
            $this->response(array('status' => 'success'), 201);
        } else {
            $this->response(array('status' => 'fail', 502));
        }
    }
    
   

    //Masukan function selanjutnya disini
}
?>