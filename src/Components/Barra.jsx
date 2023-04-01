import React from 'react'
import { NavLink } from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Barra = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgb(23, 162, 184)', height: '80px'}}>
      
    <NavLink className={({ isActive }) => (isActive ? 'viewActiva' : 'view')}
      to='/' style={{padding: '25px' }}>
    The Game Videojuegos
    </NavLink>
    <img src='https://i.ibb.co/nfHpvX2/thegame22.png' style={{width:'200px',height:'80px'}}alt='logo'></img>
    <div style={{padding: '25px' }}>
    <NavLink className={({ isActive }) => (isActive ? 'viewActiva' : 'view')}
      to='/Login' >
       <Button>
      <strong>Inicia Sesión | Registrarse </strong>
      </Button>
    </NavLink>
    </div>
    
  </div>
  )
}

export default Barra