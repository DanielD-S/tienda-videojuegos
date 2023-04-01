import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import ContextoGlobal from '../Context/ContextoGlobal.jsx';
import Cardjuego from './Cardjuego.jsx';

const Galeria = () => {
  const { juegos } = useContext(ContextoGlobal);
  return (
    <div>
      <h3 style={{ margin: '10px' }}>Productos Destacados</h3>
      <Row>
        {juegos.map((juego, index) => {
          return (
            index % 5 === 0 && (
              <Row key={juego.id}>
                <Col xs={12} md={3}>
                  <Cardjuego juego={juego} />
                </Col>
                {juegos.slice(index + 1, index + 4).map((juego) => (
                  <Col xs={12} md={3} key={juego.id}>
                    <Cardjuego juego={juego} />
                  </Col>
                ))}
              </Row>
            )
          );
        })}
      </Row>
    </div>
  );
};

export default Galeria;