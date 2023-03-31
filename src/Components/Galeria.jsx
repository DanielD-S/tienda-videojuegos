import React, { useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import ContextoGlobal from '../Context/ContextoGlobal.jsx'
import Cardjuego from './Cardjuego.jsx'

const Galeria = ({ fav = false }) => {
  const { juegos } = useContext(ContextoGlobal);
  return (
    <>
      <Row >
        {
          juegos.filter((f) => {
            if (fav) {
              return f.liked ? f : null;
            } else {
              return f;
            }
          }).map((juego) => {
            return <Col key={juego.id}><Cardjuego fav={fav} juegos={juego}></Cardjuego></Col>
          })
        }
      </Row>
    </>
  )
}

export default Galeria