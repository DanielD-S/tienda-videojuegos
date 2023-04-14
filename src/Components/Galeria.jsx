import React, { useContext, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ContextoGlobal from '../Context/ContextoGlobal.jsx';
import Cardjuego from './Cardjuego.jsx';
import Carrusel from './Carrusel.jsx';

const Galeria = ({ fav = false }) => {
  const { juegos } = useContext(ContextoGlobal);
  const [sucursalSeleccionada, setSucursalSeleccionada] = useState('');

  const ordenarPorSucursal = (sucursal) => {
    setSucursalSeleccionada(sucursal);
  };

  return (
    <>
      {!fav && <Carrusel />
      }
      {!fav&& <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
        <label htmlFor="ordenar">Ordenar por sucursal:</label>
        <select id="ordenar" value={sucursalSeleccionada} onChange={(e) => ordenarPorSucursal(e.target.value)}>
          <option value="">Mostrar todos</option>
          <option value="Internet">Internet</option>
          <option value="Sucursal Santiago">Sucursal Santiago</option>
          <option value="Sucursal Viña del Mar">Sucursal Viña del Mar</option>
          <option value="Sucursal Concepción">Sucursal Concepción</option>
        </select>
      </div>}
      <Row>
        {juegos
          .filter((juego) => !sucursalSeleccionada || juego.dispo.includes(sucursalSeleccionada))
          .filter((f) => (fav ? f.liked : true))
          .map((juego) => (
            <Col key={juego.id}>
              <Cardjuego fav={fav} juego={juego} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Galeria;
