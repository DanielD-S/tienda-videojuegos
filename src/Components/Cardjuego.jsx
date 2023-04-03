import { Card, Button } from 'react-bootstrap';
import React, { useContext } from 'react'
import Heart from './Heart.jsx';
import ContextoGlobal from '../Context/ContextoGlobal.jsx';
import DetalleJuego from '../Views/DetalleJuego.jsx';
import { useNavigate } from 'react-router-dom';

const Cardjuego = ({ fav,juego }) => {
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
    <div >  
      <Card style={{ width: '15rem', height:'600px', marginTop: '2em', marginLeft: '2em' }}>
      {!fav && <p className="btnFav" onClick={() => eligeFavorito(juego.id)} >
         <Heart filled={juego.liked}></Heart>
        </p>
        }
        {/* adición para ver en DetalleJuego  */}
         <a href={`/juego/${juego.id}`}>
          <Card.Img style={{marginTop:'10px'}} variant="top" src={juego.img} />
        </a> 
        
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
            {/* adición función OnClick*/}
          <Button onClick={() => verDetalle()}>Ver más</Button>
          <Button style={{margin:'2px'}}>Añadir</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cardjuego