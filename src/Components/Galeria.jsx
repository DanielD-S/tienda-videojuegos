import React, { useContext, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ContextoGlobal from '../Context/ContextoGlobal.jsx';
import Cardjuego from './Cardjuego.jsx';
import Carrusel from './Carrusel.jsx';

const Galeria = ({ fav = false, }) => {
  const { juegos} = useContext(ContextoGlobal);
  const [sucursalSeleccionada, setSucursalSeleccionada] = useState('');
  const [consolaSeleccionada, setConsolaSeleccionada] = useState('');

  const ordenarPorSucursal = (sucursal) => {
    setSucursalSeleccionada(sucursal);
  };

  const filtrarPorConsola = (consola) => {
    setConsolaSeleccionada(consola);
  }

  return (    
    <>
      {!fav && <Carrusel />}
      {!fav && <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
        <div>
          <label htmlFor="ordenar">Ordenar por sucursal:</label>
          <select id="ordenar" value={sucursalSeleccionada} onChange={(e) => ordenarPorSucursal(e.target.value)}>
            <option value="">Mostrar todos</option>
            <option value="Internet">Internet</option>
            <option value="Sucursal Santiago">Sucursal Santiago</option>
            <option value="Sucursal Viña del Mar">Sucursal Viña del Mar</option>
            <option value="Sucursal Concepción">Sucursal Concepción</option>
          </select>
        </div>
        <div style={{ borderLeft: '1px solid black', marginLeft: '1rem', paddingLeft: '1rem' }}>
          <label htmlFor="filtrar">Filtrar por consola:</label>
          <select id="filtrar" value={consolaSeleccionada} onChange={(e) => filtrarPorConsola(e.target.value)}>
            <option value="">Mostrar todos</option>
            <option value="PS5">PlayStation</option>
            <option value="Nintendo Switch">Nintendo</option>
            <option value="PC">PC</option>
          </select>
        </div>
      </div>}
      
      <Row>
        {juegos          
          .filter((juego) => !sucursalSeleccionada || juego.dispo.includes(sucursalSeleccionada))
          .filter((juego) => !consolaSeleccionada || juego.consola === consolaSeleccionada)
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