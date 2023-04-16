import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';
import Contexto from '../Context/Contexto';

const Barra = () => {

  const [position, setPosition] = useState(0);

  //para traer contexto para poder cerrar sesión
  const { usuario, setUsuario } = useContext(Contexto);
  const navigate = useNavigate();

  const cerrarApp = () => {
    setUsuario({ conectado: false, nombre: '' });
    navigate('/');
  }

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
      <Navbar fixed='top' style={{ backgroundColor: 'rgb(23, 162, 184)' }} >
        <img src='https://i.ibb.co/nfHpvX2/thegame22.png' style={{ width: '200px', height: '80px', transform: `translateX(${position}px)` }}
          alt='logo' onClick={handleClick}
          className={isHovering ? 'img-cursor' : ''}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}></img>
        <div className='waves'>


        </div>
        <div style={{ marginLeft: 'auto' }}>
          <NavLink className={({ isActive }) => (isActive ? 'viewActiva' : 'view')}
            to='/' style={{
             
              fontWeight: 'bold',
              padding: '15px',
              textDecoration: 'none',
            }}
            activeStyle={{ borderBottom: '3px solid #fff' }}
            exact>
            <i class="fa-solid fa-store"></i> Marketplace
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'viewActiva' : 'view')}
            to="/favoritos" style={{
             
              fontWeight: 'bold',
              padding: '15px',
              textDecoration: 'none',
            }}
            activeStyle={{ borderBottom: '3px solid #fff' }}
            exact>
            <i class="fa-solid fa-heart fa-beat" style={{color:'red'}}></i> Favoritos
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'viewActiva' : 'view')}

            to='/miperfil' style={{
            
              fontWeight: 'bold',
              padding: '15px',
              textDecoration: 'none',
            }}
            activeStyle={{ borderBottom: '3px solid #fff' }}
            exact>
            <strong><i class="fa-regular fa-circle-user"></i> {usuario.usuario}</strong>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'viewActiva' : 'view')}
            to='/' style={{
            
              fontWeight: 'bold',
              padding: '15px',
              textDecoration: 'none',
            }}
            activeStyle={{ borderBottom: '3px solid #fff' }}
            exact>
            <i class="fa-solid fa-right-to-bracket"> </i> <span onClick={() => cerrarApp()}>Salir</span>
          </NavLink>
        </div >
      </Navbar>

    </div >
  )
}

export default Barra