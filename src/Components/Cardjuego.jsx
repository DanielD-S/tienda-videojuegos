import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap';
import Heart from './Heart.jsx';
import ContextoGlobal from '../Context/ContextoGlobal.jsx';

const Cardjuego = ({ fav, juego }) => {
  const { juegos, setJuegos } = useContext(ContextoGlobal);

  const eligeFavorito = (id) => {
    const juegoAprov = juegos.findIndex((j) => j.id === id);
    juegos[juegoAprov].liked = !juegos[juegoAprov].liked;
    setJuegos([...juegos]);
  }

  return (
    <div>
      <Card style={{ width: '18rem', marginTop: '2em', marginLeft: '2em' }}>
        <Card.Img variant="top" src={juego.img} />
        {!fav && <Button className="btnFav" onClick={() => eligeFavorito(juego.id)} >
         <Heart filled={juego.liked}></Heart>
        </Button>
        }console.log(juego.id)
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
          <Button>Ver más</Button>🎮
          <Button>Añadir</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cardjuego