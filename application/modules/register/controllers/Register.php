<?php

    class Register extends MY_Controller{
        public function index(){
            $this->page_load('index');
        }

        public function register_user(){
            $name = $this->input->post('name');
            $email_address = $this->input->post('email_address');
            $password = $this->input->post('password');
            $confirm_password = $this->input->post('c_password');
            $user = $this->MY_Model->getRows('users');
            foreach($user as $u):
                $u['email_address'];
            endforeach;
            
            if($password != $confirm_password){
                echo "password is not match";
            }else if($u['email_address'] == $email_address){
                echo "email address is already taken";
            }else{
                $add = array(
                    'name' => $name,
                    'email_address' => $email_address,
                    'password' => $password,
                    'user_type' => 1
                );
    
                $insert = $this->MY_Model->insert('users', $add);
                $this->success_register();
            }            
        }

        public function success_register(){
            $this->page_load('success');
        }
    }


















?>
