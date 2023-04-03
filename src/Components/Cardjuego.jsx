import { Card, Button } from 'react-bootstrap';
import React, { useContext } from 'react'
import Heart from './Heart.jsx';
import ContextoGlobal from '../Context/ContextoGlobal.jsx';

const Cardjuego = ({ fav,juego }) => {
  const { juegos, setJuegos } = useContext(ContextoGlobal);

  const eligeFavorito = (id) => {
    const juegoAprov = juegos.findIndex((j) => j.id === id);
    juegos[juegoAprov].liked = !juegos[juegoAprov].liked;
    setJuegos([...juegos]);
  }


  return (
    <div >  
      
      <Card style={{ width: '15rem', height:'620px', marginTop: '2em', marginLeft: '2em' }}>
      <Card.Img style={{marginTop:'10px'}} variant="top" src={juego.img} />
      {!fav && <p className="btnFav" onClick={() => eligeFavorito(juego.id)} >
         <Heart filled={juego.liked}></Heart>
        </p>
        } 
        <Card.Title>{juego.name}</Card.Title>            
        <Card.Body>
          
          <hr/>
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