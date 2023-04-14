import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Publicacion = ({ publications }) => {
    return (
        <div>
        <Row xs={2} md={3} lg={4} className=""  style={{ Height: '250px', Width:'700px' }}>
      {publications.map((publication) => (
        <Col key={publication.id} >
          <Card style={{width:'250px',textAlign:'center',alignItems:'center', margin:'5px'}}>
            {publication.imagen && (
              <Card.Img  style={{width:'200px',margin:'2px'}}  variant="top" src={`data:image/jpeg;base64,${publication.imagen}`} />
            )}
            <Card.Body >
              <Card.Title>{publication.nombre}</Card.Title>
              <hr></hr>
              <Card.Text><strong>Descripción:</strong> {publication.descripcion}</Card.Text>
              <Card.Text >Precio: $ {publication.precio}</Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
      );
    };

export default Publicacion;