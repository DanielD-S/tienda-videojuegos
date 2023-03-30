import React , { useContext } from 'react'
import { Row,Col } from 'react-bootstrap'
import ContextoGlobal from '../Context/ContextoGlobal.jsx'
import Cardjuego from './Cardjuego.jsx'

const Galeria = () => {
  const { juegos } = useContext(ContextoGlobal);
  return (
    <>
    <Row >
        {
            juegos.map((juego) => {
                return <Col key={juego.id}><Cardjuego juego={juego}></Cardjuego></Col>
            })
        }
    </Row>
</>
  )
}

export default Galeria