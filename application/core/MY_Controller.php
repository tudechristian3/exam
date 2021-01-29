<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MY_Controller extends MX_Controller {

	public function __construct(){
            $this->load->model('MY_Model');


            //$this->load->model('MY_Model');

    		$route = $this->router->fetch_class();
    		if($route == 'login'){
    			if($this->session->has_userdata('email_address')){
    				redirect(base_url('contact'));
    			}
    		} else {
    			if(!$this->session->has_userdata('email_address')){
    				redirect(base_url('login'));
    			}
    		}
        }

	public function page_load($page,$data = array()){
		$data['user'] = $this->MY_Model->getRows('users');
		//$this->load->view('includes/header',$data);
		//$this->load->view('includes/navbar',$data);
		$this->load->view($page,$data);
		//$this->load->view('includes/footer',$data);
	}

	public function load_login($page,$data = array()){
		//$this->load->view('includes/login_header',$data);
		// $this->load->view('includes/nav',$data);
		$this->load->view($page,$data);
		//$this->load->view('includes/login_footer',$data);
	}

}
