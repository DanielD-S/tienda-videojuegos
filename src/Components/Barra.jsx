import React from 'react'
import { NavLink } from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Barra = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgb(23, 162, 184)', height: '70px', padding: '25px' }}>
    <NavLink className={({ isActive }) => (isActive ? 'viewActiva' : 'view')}
      to='/'>
      The Game Video Juegos
    </NavLink>
    <NavLink className={({ isActive }) => (isActive ? 'viewActiva' : 'view')}
      to='/carrito'>

      <Button>
        <strong> Registrate|Inicia Sesión </strong>
      </Button>


    </NavLink>
  </div>
  )
}

export default Barra