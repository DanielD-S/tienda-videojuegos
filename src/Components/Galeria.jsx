import React, { useContext} from 'react'
import { Row, Col } from 'react-bootstrap'
import ContextoGlobal from '../Context/ContextoGlobal.jsx'
import Cardjuego from './Cardjuego.jsx'
import Carrusel from './Carrusel.jsx'

const Galeria = ({ fav = false }) => {
  const { juegos } = useContext(ContextoGlobal);
  return (
    <>
     {!fav && <Carrusel/>
    }
       <Row >
        {
          juegos.filter((f) => {
            if (fav) {
              return f.liked ? f : null;
            } else {
              return f;
            }
          }).map((juego) => {
            return <Col key={juego.id}><Cardjuego  fav={fav} juego={juego}></Cardjuego></Col>
          })
        }
      </Row>
    </>
  )
}

export default Galeria;
