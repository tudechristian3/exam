<?php

    class Logout extends MY_Controller{

        public function index(){
            $this->load_login('index');
        }

        public function logout(){


            $this->session->unset_userdata('email_address');
		    redirect(base_url('login'));

        }
    }


?>
