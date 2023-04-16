import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Publicacion = ({ publications }) => {
  return (
    <div>
      <Row xs={2} md={3} lg={4} className="" style={{ Height: '250px', Width: '700px' }}>
        {publications.map((publication) => (
          <Col key={publication.id} >
            <Card style={{ width: '250px', textAlign: 'center', alignItems: 'center', margin: '5px' }}>
              {publication.imagen && (
                <Card.Img style={{ width: '200px', margin: '2px' }} variant="top" src={`data:image/jpeg;base64,${publication.imagen}`} />
              )}
              <Card.Body >
                <Card.Title style={{ fontSize: '1rem', height: '3rem' }}>{publication.nombre}</Card.Title>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ width: '55%' }}>
                    <h5 style={{ fontSize: '0.9rem' }}>Consola:</h5>
                    <span style={{ fontSize: '0.8rem' }}>{publication.consola}</span>
                  </div>
                  <div style={{ width: '50%', textAlign: 'right' }}>
                    <hr />
                    <h4 style={{ fontSize: '1rem' }}>
                      ${publication.precio.toLocaleString('es-CL', { minimumFractionDigits: 0 })}
                    </h4>
                    <hr />
                  </div>
                </div>
                {publication.descripcion}

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Publicacion;