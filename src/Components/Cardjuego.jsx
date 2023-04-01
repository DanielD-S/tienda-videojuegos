import React from 'react'
import { Card, Button } from 'react-bootstrap';
import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap';
import Heart from './Heart.jsx';
import ContextoGlobal from '../Context/ContextoGlobal.jsx';

const Cardjuego = ({ fav, juegos }) => {
  const { juego, setJuegos } = useContext(ContextoGlobal);

  const eligeFavorito = (id) => {
    const juegoAprov = juego.findIndex((j) => j.id === id);
    juego[juegoAprov].liked = !juego[juegoAprov].liked;
    setJuegos([...juego]);
  }

  return (
    <div >
      <Card style={{ width: '15rem', height:'600px', marginTop: '2em', marginLeft: '2em' }}>
        <Card.Img style={{marginTop:'10px'}} variant="top" src={juego.img} />
        <Card.Body>
          <Card.Title>{juegos.name}</Card.Title>
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