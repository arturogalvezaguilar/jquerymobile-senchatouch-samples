<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Agenda
 *
 * @author Toshiba
 */
class Agenda  extends CI_Controller{
    public function __construct() {
        parent::__construct();
        $this->load->model("AgendaModel","_agenda");
    }
    public function listar(){
        $callback = $this->input->get("callback");
        if($callback !=""){
            $json = $this->_agenda->listar();
            $json = json_encode($json);
            echo $callback."(".$json.")";
        }
    }
    public function verdatos(){
        $callback = $this->input->get("callback");
        if($callback !=""){
            $this->_agenda->setId($this->input->get("id"));
            $json = $this->_agenda->veragenda();
            $json = json_encode($json);
            echo $callback."(".$json.")";
        }
    }
    public function guardar(){
        $callback = $this->input->get("callback");
        if($callback !=""){
            $this->_agenda->setNombre($this->input->get("nombre"));
            $this->_agenda->setObservacion($this->input->get("observacion"));
            $json = $this->_agenda->guardar();
            $json = json_encode($json);
            echo $callback."(".$json.")";
        }
    }
}

?>
