import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import CrearPublicacion from '../Components/CrearPublicacion';
import Publicacion from '../Components/Publicacion';


const Marketplace = () => {
    const [publications, setPublications] = useState([]);
    const handleCreatePublication = (publication) => {
      setPublications([...publications, { ...publication, id: publications.length + 1 }]);
    };
  
    return (
        <div>
        <h1 style={{marginTop:'2em'}}>Crear Publicación</h1>
        <Container>
        <CrearPublicacion onCreatePublication={handleCreatePublication} />
        </Container>
        <div>
          <h2>Mis Publicaciones</h2>
        <Publicacion publications={publications}/>
        </div>
        </div>
      
    );
    }
export default Marketplace;