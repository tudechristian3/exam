<?php

    class Contact extends MY_Controller{
        public function index(){
            $this->page_load('index');
        }
        public function add(){
            $this->page_load('add');
        }


        public function insert(){
            $name = $this->input->post('name');
            $email_address = $this->input->post('email_address');
            $company_name = $this->input->post('company_name');
            $phone = $this->input->post('phone');

            $users = $this->MY_Model->getRows('users');

           foreach($users as $u):
               if($u['email_address'] == $this->session->userdata('email_address')){
                   $id = $u['user_id'];
               }
            endforeach;

            $add = array(
                'name' => $name,
                'company_name' => $company_name,
                'email' => $email_address,
                'phone' => $phone,
                'user_id' => $id
            );
            $insert = $this->MY_Model->insert('contact_person', $add);
            echo "success";
        }

        public function delete(){
            $contact_id = $this->input->post('contact_id');
    		$where = array( 'contact_id' => $contact_id );
            $update = $this->MY_Model->delete('contact_person', $where);
            
            echo json_encode($update);
        }

        public function edit(){
            $users['users'] = $this->MY_Model->getRows('contact_person');
            $this->page_load('edit', $users);
        }
        
        public function update(){
            $user_id = $this->input->post('contact_id');
            $name = $this->input->post('name');
            $email_address = $this->input->post('email_address');
            $company_name = $this->input->post('company_name');
            $phone = $this->input->post('phone');

            $users = $this->MY_Model->getRows('users');

           foreach($users as $u):
               if($u['email_address'] == $this->session->userdata('email_address')){
                   $id = $u['user_id'];
               }
            endforeach;

            $add = array(
                'name' => $name,
                'company_name' => $company_name,
                'email' => $email_address,
                'phone' => $phone,
                'user_id' => $id
            );

            $where = array(
    			'contact_id' => $user_id
            );
            
            $insert = $this->MY_Model->update('contact_person', $add, $where);
        }
    }


















?>
