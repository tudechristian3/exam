<?php

    class Login extends MY_Controller{

        public function index(){
            $this->load_login('index');
        }

        public function auth(){
            $username = $this->input->post('username');
            $password = $this->input->post('password');
            $params['where'] = array(
                'email_address' => $username
                //'user_id' => $this->session->userdata('user_id')
            );
            $checkUser = $this->MY_Model->getRows('users', $params, 'row');

            if($checkUser){
                //
                    if($checkUser->user_type == 1){
                        //$this->session->set_userdata((array)$checkUser);
                        $this->session->set_userdata('email_address' , $checkUser->email_address);
                        redirect(base_url('contact'));
                    } else {
                        $data['msg'] = 'Deactivated Account, Please try again';
                        $this->load_login('index',$data);
                    }
                //}
                    // else {
                    // $data['msg'] = 'Invalid password. Please try again';
                    // $this->load_login('index',$data);
            }else{
                $data['msg'] = 'Deactivated Account, Please try again';
                $this->load_login('index',$data);
            }
        }
    }





















?>
