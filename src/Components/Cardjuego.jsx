import { Card, Button } from 'react-bootstrap';
import React, { useContext } from 'react'
import Heart from './Heart.jsx';
import ContextoGlobal from '../Context/ContextoGlobal.jsx';
import { useNavigate } from 'react-router-dom';

const Cardjuego = ({ fav, juego }) => {
  const { juegos, setJuegos } = useContext(ContextoGlobal);

  const eligeFavorito = (id) => {
    const juegoAprov = juegos.findIndex((j) => j.id === id);
    juegos[juegoAprov].liked = !juegos[juegoAprov].liked;
    setJuegos([...juegos]);
  }

  // usar useNavigate
  const navigate = useNavigate();

  const verDetalle = () => {
    navigate(`/Detalle/${juego.id}`);
  }

  return (
    <div style={{ width: '15rem', height: '460px', margin: '1em' }}>
      <Card style={{ height: '100%' }}>
        {/* añadir enlace para ver en DetalleJuego */}

        <Card.Img className="card-image" style={{ height: '250px', objectFit: 'cover', marginTop:'5px' }} variant="top" src={juego.img} />
        {!fav && (
          <p className="btnFav" onClick={() => eligeFavorito(juego.id)}>
            <Heart filled={juego.liked}></Heart>
          </p>
        )}
        <Card.Body>
          <Card.Title style={{ fontSize: '1rem', height: '3rem' }}>{juego.name}</Card.Title>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ width: '50%' }}>
              <h5 style={{ fontSize: '0.8rem' }}>Consola:</h5>
              <span style={{ fontSize: '0.8rem' }}>{juego.consola}</span>
            </div>
            
            <div style={{ width: '50%', textAlign: 'right' }}>
            <hr />
              <h4 style={{ fontSize: '1.2rem' }}>${juego.price.toLocaleString('es-CL', { minimumFractionDigits: 0 })}</h4>
            </div>
          </div>
          <div style={{ margin: '1rem' }}>
            {/* adición función OnClick*/}
            <hr />
            <Button onClick={() => verDetalle()}>Ver más</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cardjuego
