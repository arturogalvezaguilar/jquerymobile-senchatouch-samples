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
class AgendaModel extends CI_Model {

    private $id;
    private $nombre;
    private $observacion;

    public function getId() {
        return $this->id;
    }

    public function setId($id) {
        $this->id = $id;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    public function getObservacion() {
        return $this->observacion;
    }

    public function setObservacion($observacion) {
        $this->observacion = $observacion;
    }

    public function __construct() {
        parent::__construct();
    }

    public function listar() {
        return $this->db->select("idagenda,nombre")->get("agenda")->result();
    }

    public function veragenda() {
        return $this->db->select("nombre,observacion")->from("agenda")->where("idagenda", $this->getId())->get()->result();
    }

    public function guardar() {
        $agenda = array(
            "nombre" => $this->getNombre(),
            "observacion" => $this->getObservacion()
        );
        return $this->db->insert("agenda", $agenda);
    }

}

?>
