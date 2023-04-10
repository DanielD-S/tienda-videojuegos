import { Card, Button } from 'react-bootstrap';
import React, { useContext } from 'react'
import Heart from './Heart.jsx';
import ContextoGlobal from '../Context/ContextoGlobal.jsx';
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
      <Card  style={{ width: '15rem', height:'500px', marginTop: '2em', marginLeft: '2em' }}>
        {/* añadir enlace para ver en DetalleJuego */}
       
      <Card.Img className="card-image" style={{marginTop:'10px'}} variant="top" src={juego.img} />
      {!fav && <p className="btnFav" onClick={() => eligeFavorito(juego.id)} >
         <Heart filled={juego.liked}></Heart>
        </p>
        } 
        <Card.Title>{juego.name}</Card.Title>            
        <Card.Body>
          
          
          <div>
            <h5>Consola:</h5>
            <p>{juego.consola}</p>
            <hr/>
          </div>
          <div>
            <h4>${juego.price.toLocaleString('es-CL', { minimumFractionDigits: 0 })}</h4> 
          </div>
          <div style={{margin:'5px'}}>
            {/* adición función OnClick*/}
            <Button onClick={() => verDetalle()}>Ver más</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cardjuego