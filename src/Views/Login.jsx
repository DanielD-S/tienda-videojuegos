import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Css/Style.css'
const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Card>
            <Card.Body>
              <Card.Title>Iniciar sesión</Card.Title>
              <Form>
                <Form.Group>
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                </Form.Group>
                <Button style={{margin:'10px'}} variant="primary" type="submit">Iniciar sesión</Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card>
            <Card.Body>
              <Card.Title>¿Aún no tienes cuenta?</Card.Title>
              <p>Si es la primera vez que visitas la tienda, por favor regístrate haciendo click en el botón abajo.</p>
              <NavLink to="/Registro" className="btn btn-primary">Regístrate aquí</NavLink>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
   
)}

export default Login