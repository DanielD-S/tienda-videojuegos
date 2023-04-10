import React from 'react'
import {Card, ListGroup, Button} from 'react-bootstrap'


const Miperfil = () => {
  return (
    <div style={{marginTop:'8em'}}>
    <div className='perfil'>
      <img className="imagenP" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQKtbEn1SybCH0rzr_kYw6dL7MFbJ08DO5kFV84njwSBWiiXP0R" alt="" />
      <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Link style={{marginLeft: "12em"}} href="#"><i class="fa-solid fa-pen-to-square"></i> Editar</Card.Link>
      <Card.Title>Mis Datos</Card.Title>
      </Card.Body>
      
      <ListGroup className="list-group-flush">
      <ListGroup.Item>Nombre Usuario: Juan2000</ListGroup.Item>
        <ListGroup.Item>Nombre: Juan</ListGroup.Item>
        <ListGroup.Item>Apellido: Perez</ListGroup.Item>
        <ListGroup.Item>Correo: admin@thegame.com</ListGroup.Item>
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