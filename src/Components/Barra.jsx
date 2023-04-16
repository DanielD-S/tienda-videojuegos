import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

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
      <Navbar fixed='top' expand="lg"style={{ backgroundColor: 'rgb(23, 162, 184)' }}>
        <Container fluid>
      <Navbar.Brand href="#">
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
        /></Navbar.Brand>
        <div style={{ marginLeft: 'auto' }}>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2 buscador"
              aria-label="Search"
            />
            
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
          <Nav.Link><NavLink
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
           <i class="fa-solid fa-house"></i> Home
          </NavLink></Nav.Link>
          <Nav.Link>
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
           <i class="fa-solid fa-right-to-bracket"> </i> Ingresar
          </NavLink></Nav.Link>
          
          </Nav>
          
        </Navbar.Collapse>
        </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Barra;
