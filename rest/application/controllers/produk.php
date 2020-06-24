<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class Produk extends REST_Controller {

    function __construct($config = 'rest') {
        parent::__construct($config);
        $this->load->database();
    }

    function index_get() {
        $id = $this->get('id');
        if($id == null){
            $this->db->select('*');
            $produk = $this->db->get('tbl_produk')->result();
            $this->response($produk, 200); 
        }else{
            $this->db->select('id_produk');
            $this->db->select('nama_produk');
            $this->db->select('harga_produk');
            $this->db->select('foto_produk');
            $this->db->where('id_produk', $id);
            $produk = $this->db->get('tbl_produk')->result();
        if($produk == null){
            echo "Data Tidak Ada";
        }else{
            $this->response($produk, 200); 
        }
        }
    }

    function index_post() {
        $data = array(
                    'nama_produk'     => $this->post('nama_produk'),
                    'harga_produk'    => $this->post('harga_produk'),
                    'foto_produk'    => $this->post('foto_produk'));
        $insert = $this->db->insert('tbl_produk', $data);
        if ($insert) {
            $this->response($data, 200);
        } else {
            $this->response(array('status' => 'fail', 502));
        }
    }

    function index_put() {
        $id = $this->put('id');
        $data = array(
                    'nama_produk'     => $this->put('nama_produk'),
                    'harga_produk'    => $this->put('harga_produk'),
                    'foto_produk'    => $this->put('foto_produk'));
        $this->db->where('id_produk', $id);
        $update = $this->db->update('tbl_produk', $data);
        if ($update) {
            $this->response($data, 200);
        } else {
            $this->response(array('status' => 'fail', 502));
        }
    }

    function index_delete() {
        $id = $this->delete('id');
        $this->db->where('id_produk', $id);
        $delete = $this->db->delete('tbl_produk');
        if ($delete) {
            $this->response(array('status' => 'success'), 201);
        } else {
            $this->response(array('status' => 'fail', 502));
        }
    }
    
   

    //Masukan function selanjutnya disini
}
?>