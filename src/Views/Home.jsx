import React from 'react'
import Galeria from '../Components/Galeria'


const Home = (valorBusqueda) => {
  return (
    <div id="Home">
        <Galeria valorBusqueda={valorBusqueda} fav={false}></Galeria>
        
       
    </div>
    
  )
}

export default Home