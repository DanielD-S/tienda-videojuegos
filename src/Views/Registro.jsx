import React, { useState } from 'react';
import { Card, Form, Button, Modal } from 'react-bootstrap';
import '../Css/Style.css'

const Registro = () => {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="container">
      <Card className="p-5">
      <Form style={{textAlign:'start'}}   onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su apellido"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su correo electrónico"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Form.Group>
        <div style={{textAlign:'center'}}>
        <Button style={{margin:'10px'}} variant="primary" type="submit">
          Crear Cuenta <b>The Game</b>
        </Button>
        </div>
        
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Registro exitoso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           Gracias por registrarse en nuestra página web.
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
    </div>
  )
}

export default Registro