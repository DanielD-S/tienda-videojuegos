import React from 'react';
import { useContext } from 'react';

import ContextoGlobal from '../Context/ContextoGlobal';
import {Form} from 'react-bootstrap'

const Search = () => {

  const {juegos,setJuegosFiltrados}  = useContext(ContextoGlobal);
  const searchPublications = e => {
    const val = e.target.value;
    const newList = juegos.filter(p => 
        (
            p ? p.name.toLowerCase().includes(val.toLowerCase()) : 
            juegos
        )
    );
    setJuegosFiltrados(newList);
  }

  return (
    <>
        
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2 buscador"
              aria-label="Search"
              onChange={searchPublications}
            />
           
          </Form>
    </>
  )
}

export default Search;