import React from 'react'
import Galeria from '../Components/Galeria'

const Favoritos = () => {
  return (
    <div>
    <h1>Mis Favoritos</h1>  
    <div className="p-3 galeria grid-columns-4">
       <Galeria fav={true}></Galeria>
      </div>
    </div>
  )
}

export default Favoritos