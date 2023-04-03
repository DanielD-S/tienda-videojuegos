import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ContextoGlobal from '../Context/ContextoGlobal';


const DetalleJuego = () => {
  const { id } = useParams();
  const { juegos, setJuegos } = useContext(ContextoGlobal);


  const juego = juegos.find((juego) => juego.id === parseInt(id));


  const agregarJuego = (juego) => {
    setJuegos((juegos) => [...juegos, juego]);
  };


  if (!juego) {
    return <div>Juego no encontrado</div>;
  }


  return (
    <Card border="light" style={{ marginTop: '50px' }}>
      <div className="d-flex justify-content-center align-items-center">
        <Card.Img
          variant="left"
          src={juego.img}
          style={{ width: '300px', height: '300px', objectFit: 'cover' }}
        />
        <div className="p-3">
          <Card.Title>{juego.name}</Card.Title>
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
            <Button variant="primary" onClick={() => agregarJuego(juego)}>
              Añadir a Favoritos
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};


export default DetalleJuego;