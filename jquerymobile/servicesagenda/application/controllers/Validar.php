<?php

class Validar extends CI_Controller {
    public function __construct() {        
        parent::__construct();
        $this->load->model("Usuario","_user");        
    }
    public function validarUsuario(){
        $callback = $this->input->get("callback");
        if($callback!=""){
            $this->_user->setUsuario($this->input->get("user"));
            $this->_user->setClave($this->input->get("pass"));
            $rs = $this->_user->validarLogin();
            if($rs->num_rows() > 0){
                echo $callback."(".true.")";
            }else{
                echo $callback."(".false.")";
            }
        }
    }
}

?>
