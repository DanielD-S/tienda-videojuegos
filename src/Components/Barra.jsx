import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

const Barra = () => {

  const [position, setPosition] = useState(0);

  const handleClick = () => {
    setPosition(100);
    setTimeout(() => setPosition(-100), 500);
    setTimeout(() => setPosition(0), 500);
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <Navbar fixed='top'  className='barraNav' >
        <img src='https://i.ibb.co/nfHpvX2/thegame22.png' style={{ width: '200px', height: '80px', transform: `translateX(${position}px)` }}
          alt='logo' onClick={handleClick}
          className={isHovering ? 'img-cursor' : ''}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}></img>
        <div>
        </div>
        <div style={{ marginTop: '25px' }}>
        <NavLink className={({ isActive }) => (isActive ? 'viewActiva' : 'view')}
            to='/' style={{ padding: '15px' }}>
            <i class="fa-solid fa-home"></i> Home
          </NavLink>  
            <NavLink className={({ isActive }) => (isActive ? 'viewActiva' : 'view')}
            to='/Login' style={{ padding: '15px' }}> 
            <i class="fa-solid fa-right-to-bracket"></i> Ingresar 
            </NavLink>
        </div >
      </Navbar>





    </div >
  )
}

export default Barra