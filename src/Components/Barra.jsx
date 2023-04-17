import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const Barra = () => {
  const [position, setPosition] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const handleClick = () => {
    setPosition(100);
    setTimeout(() => setPosition(-100), 500);
    setTimeout(() => setPosition(0), 500);
  };
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <Navbar fixed='top' style={{ backgroundColor: 'rgb(23, 162, 184)' }}>
        <img
          src='https://i.ibb.co/nfHpvX2/thegame22.png'
          alt='logo'
          style={{
            width: '200px',
            height: '80px',
            transform: `translateX(${position}px)`,
            cursor: isHovering ? 'pointer' : 'default',
          }}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        <div style={{ marginLeft: 'auto' }}>
          <NavLink
          className={({ isActive }) => (isActive ? 'viewActiva' : 'view')}
            to='/'
            style={{
       
              fontWeight: 'bold',
              padding: '15px',
              textDecoration: 'none',
            }}
            activeStyle={{ borderBottom: '3px solid #fff' }}
            exact
          >
            <i class="fa-solid fa-home"></i>
            Home
          </NavLink>
          <NavLink
          className={({ isActive }) => (isActive ? 'viewActiva' : 'view')}
            to='/login'
            style={{
          
              fontWeight: 'bold',
              padding: '15px',
              textDecoration: 'none',
            }}
            activeStyle={{ borderBottom: '3px solid #fff' }}
          >
            <i class="fa-solid fa-right-to-bracket"></i>
            Ingresar
          </NavLink>
        </div>
      </Navbar>
    </div>
  );
};

export default Barra;
