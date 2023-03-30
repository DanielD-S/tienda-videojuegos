import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cardjuego = ({juego}) => {
  return (
    <div>
      <Card style={{ width: '18rem', marginTop: '2em', marginLeft: '2em' }}>
        <Card.Img variant="top" src={juego.img} />
        <Card.Body>
          <Card.Title>{juego.name}</Card.Title>
          <hr></hr>
          <div>
            <h5>Disponibilidad</h5>
            <ul>
              {
                juego.dispo.map((i) => <li key={i} style={{ listStyleType: "none", textAlign: 'start' }} > {i}</li>)
              }
            </ul>
          </div>
          <div>
            <h4>${juego.price}</h4>
          </div>
          <Button>Ver más</Button>
          <Button>Añadir</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cardjuego