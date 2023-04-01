import React from 'react'
import { Card, Button } from 'react-bootstrap';

const Cardjuego = ({juego}) => {
  return (
    <div >
      <Card style={{ width: '15rem', height:'600px', marginTop: '2em', marginLeft: '2em' }}>
        <Card.Img style={{marginTop:'10px'}} variant="top" src={juego.img} />
        <Card.Body>
          <Card.Title>{juego.name}</Card.Title>
          <hr></hr>
          <div>
            <h5>Disponibilidad</h5>
            <ul>
              {
                juego.dispo.map((i) => <li key={i} style={{ listStyleType: "none", textAlign: 'start' }} >✅ {i}</li>)
              }
            </ul>
          </div>
          <div>
            <h4>💰{juego.price}</h4>
          </div>
          <div style={{margin:'20px'}}>
          <Button>Ver más</Button>
          <Button style={{margin:'2px'}}>Añadir</Button>
          </div>
          
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cardjuego