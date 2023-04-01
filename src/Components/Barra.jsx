import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Barra = () => {

  const [position, setPosition] = useState(0);

  const handleClick = () => {
    setPosition(100);
    setTimeout(() => setPosition(-100), 500);
    setTimeout(() => setPosition(0), 1000);
  };

  const [isHovering, setIsHovering] = useState(false);
  
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgb(23, 162, 184)', height: '80px' }}>

      <NavLink className={({ isActive }) => (isActive ? 'viewActiva' : 'view')}
        to='/' style={{ padding: '25px' }}>
        🕹The Game Videojuegos
      </NavLink>
      <img src='https://i.ibb.co/nfHpvX2/thegame22.png' style={{ width: '200px', height: '80px',transform: `translateX(${position}px)` }} 
      alt='logo' onClick={handleClick}
      className={isHovering ? 'img-cursor' : ''}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}></img>

      <NavLink className={({ isActive }) => (isActive ? 'viewActiva' : 'view')}
        to='/Login' style={{ padding: '25px' }}>
           <NavLink className={({ isActive }) => (isActive ? 'viewActiva' : 'view')} to="/favoritos" style={{ padding: '25px' }}><i class="fa-solid fa-heart fa-beat"></i> Favoritos </NavLink>
        <Button>
          <strong> Ingresar </strong>
        </Button> </NavLink>
       

    
    
  </div>
  )
}

export default Barra