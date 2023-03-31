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
    <div>
      <Card style={{ width: '18rem', marginTop: '2em', marginLeft: '2em' }}>
        <Card.Img variant="top" src={juegos.img} />
        {!fav && <Button className="btnFav" onClick={() => eligeFavorito(juegos.id)} >
         <Heart filled={juegos.liked}></Heart>
        </Button>
        }console.log(juegos.id)
        <Card.Body>
          <Card.Title>{juegos.name}</Card.Title>
          <hr></hr>
          <div>
            <h5>Disponibilidad</h5>
            <ul>
              {
                juegos.dispo.map((i) => <li key={i} style={{ listStyleType: "none", textAlign: 'start' }} > {i}</li>)
              }
            </ul>
          </div>
          <div>
            <h4>${juegos.price}</h4>
          </div>
          <Button>Ver más</Button>🎮
          <Button>Añadir</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cardjuego