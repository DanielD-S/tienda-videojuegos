import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import ContextoGlobal from '../Context/ContextoGlobal';


const DetalleJuego = () => {
  const { id } = useParams();
  const { juegos } = useContext(ContextoGlobal);


  const juego = juegos.find((juego) => juego.id === parseInt(id));

// Hay que debugear este apartado, actualmente existe duplicidad a la hora de generar favoritos
  // const agregarJuego = (juego) => {
  //   setJuegos((juegos) => [...juegos]);
  // };
  

  if (!juego) {
    return <div>Juego no encontrado</div>;
  }


  return (
    <div>
    <Card  border="light" style={{ marginTop: '10em' }}>
      <div className="detalle ">
        <Card.Img
          variant="left"
          src={juego.img}
          style={{ width: '300px', height: '300px', objectFit: 'cover' }}
        />
        <div className="p-3">
          <Card.Title><strong>{juego.name}</strong></Card.Title>
          <hr />
          <Card.Text>{juego.desc}</Card.Text>
          <hr />
          <div>
            <h5>Disponibilidad</h5>
            <ul>
              {juego.dispo.map((i) => (
                <li key={i} style={{ listStyleType: 'none', textAlign: 'start' }}>
                  ✅ {i}
                </li>
              ))}
            </ul>
          </div>
         
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4>Precio: ${juego.price.toLocaleString('es-CL', { minimumFractionDigits: 0 })}</h4>
            </div>
            {/*  
            <Button variant="primary" onClick={() => agregarJuego(juego)}>
              Añadir a Favoritos
            </Button>
            */}
          </div>
        </div>
      </div>
    </Card>
    </div>
  );
};


export default DetalleJuego;