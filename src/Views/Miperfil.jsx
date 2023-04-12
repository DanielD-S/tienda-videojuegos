import React, { useContext} from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap'
import Contexto from '../Context/Contexto';


const Miperfil = () => {
    //para traer contexto para poder cerrar sesión

    const { usuario } = useContext(Contexto);

  return (
    <div style={{marginTop:'8em'}}>
      <h1>Mi Perfil</h1> 
    <div className='perfil'>
    
    <img
          className='imagenP'
          src={usuario.imagen}
          alt='Imagen de perfil'
        />
      <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Link style={{marginLeft: "12em"}} href="#"><i class="fa-solid fa-pen-to-square"></i> Editar</Card.Link>
      <Card.Title>Mis Datos</Card.Title>
      </Card.Body>
      
      <ListGroup>
      <ListGroup.Item>Nombre Usuario: {(usuario.usuario)}</ListGroup.Item>
        <ListGroup.Item>Nombre: {usuario.nombre}</ListGroup.Item>
        <ListGroup.Item>Apellido: {usuario.apellido}</ListGroup.Item>
        <ListGroup.Item>Correo: {usuario.email}</ListGroup.Item>
      </ListGroup>
      
      <Card.Body>
       <Button>Mis Publicaciones</Button>
      </Card.Body>
      
    </Card>
    </div>
   
    </div>
  )
}

export default Miperfil