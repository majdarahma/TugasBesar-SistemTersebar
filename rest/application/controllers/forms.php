<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Forms extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model("Forms_m");
    }

    //Menampilkan data mahasiswa
    function index() {
		$this->load->view('header');
		$this->load->view('forms');
		$this->load->view('footer');
	}

    public function add(){
		
        

	if(isset($_POST['tombol_key'])){
		$email = $this->input->post('email');
		$nama = $this->input->post('nama');
		$company = $this->input->post('company');
		$encode = "$email$nama";

		$hasil = sha1($encode);
		$data = array(
			'hasil' => $hasil,
		);
		$data1 = array(
			'email' => $email,
			'company'=> $email,
			'nama' => $nama,
			'api_key' => $hasil
	);
	$insert = $this->Forms_m->simpan('data_client',$data1);
		
		$this->load->view('header');
		$this->load->view('tampilkunci',$data);
		$this->load->view('footer');
	}

	}

    public function get_random(){
		$id = $this->input->post('id');
		$email = $this->input->post('email');
		$nama = $this->input->post('nama');

		$encode = "$id$email$nama";

		$hasil = sha1($encode);
		
		echo $hasil;
		$this->load->view('header');
		$this->load->view('tampilkunci',$hasil);
		$this->load->view('footer');

	}

    //Masukan function selanjutnya disini
}
?>