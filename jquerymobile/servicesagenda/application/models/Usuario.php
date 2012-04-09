<?php

class Usuario extends CI_Model {
    private $id;
    private $usuario;
    private $clave;
    
    public function __construct() {
        parent::__construct();
    }
    
    public function getId() {
        return $this->id;
    }

    public function setId($id) {
        $this->id = $id;
    }

    public function getUsuario() {
        return $this->usuario;
    }

    public function setUsuario($usuario) {
        $this->usuario = $usuario;
    }

    public function getClave() {
        return $this->clave;
    }

    public function setClave($clave) {
        $this->clave = $clave;
    }

    public function validarLogin() {
        return $this->db->select("*")
                ->from("usuario")
                ->where("usuario",$this->getUsuario())->where("clave",$this->getClave())
                ->get();
    }
    
    
}

?>
