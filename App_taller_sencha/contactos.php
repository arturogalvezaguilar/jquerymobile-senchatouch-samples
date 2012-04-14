<?php
    $cn = new mysqli('localhost','root','','taller_sencha');
    
    $action = $_REQUEST['action'];
    $contacto = isset($_POST['contacto']) ? $_POST['contacto'] : '{}';
    $contacto = json_decode($contacto);
    
    switch ($action) {
    case 'read':
            $result = array(
                'contactos'=>array()
            );
            $stm = $cn->prepare('SELECT id,nombre,telefono,email,direccion FROM contactos WHERE activo = 1');
            $rs = $stm->execute();
            $stm->bind_result($id,$nombre,$telefono,$email,$direccion);
            while($stm->fetch())
            {
                array_push($result['contactos'], 
                    array(
                        'id' => $id,
                        'nombre' => $nombre,
                        'telefono' => $telefono,
                        'email' => $email,
                        'direccion' => $direccion,
                    )
                );
            }
            echo json_encode($result);
            break;
    case 'update':
        $stm = $cn->prepare('UPDATE contactos SET nombre = ?, telefono = ?, direccion = ?, email = ?  WHERE id = ?');
        $stm->bind_param('ssssi', 
            $contacto->nombre,
            $contacto->telefono,
            $contacto->direccion,
            $contacto->email,
            $contacto->id
        );
        if($stm->execute())
        {
            echo json_encode(array('msg'=>'Contacto actualiados correctamente'));
        }
        break;
    case 'delete':
        $stm = $cn->prepare('UPDATE contactos SET activo = 0 WHERE id = ?');
        $stm->bind_param('i', 
            $contacto->id
        );
        if($stm->execute())
        {
            echo json_encode(array('msg'=>'Contacto eliminado correctamente'));
        }
        break;
    case 'create' : 
        $stm = $cn->prepare('INSERT INTO contactos(nombre,telefono,email,direccion) VALUES(?,?,?,?)');
        $stm->bind_param('ssss', 
            $contacto->nombre,
            $contacto->telefono,
            $contacto->email,
            $contacto->direccion
        );
        if($stm->execute())
        {
            echo json_encode(array('msg'=>'Contacto registrado correctamente'));
        }
        break;
}
?>
