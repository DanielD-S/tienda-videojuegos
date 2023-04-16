import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const CrearPublicacion = ({ onCreatePublication }) => {

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState(null);
  const [consola, setConsola] = useState('');

  const handleNameChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handlePriceChange = (event) => {
    const price = Number(event.target.value.replace(/\D/g, '')); // elimina los caracteres que no son dígitos
    setPrecio(price);
  };

  const handleConsoleChange = (event) => {
    setConsola(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagen(reader.result.split(',')[1]);
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreatePublication({ nombre, descripcion, precio, consola, imagen});
  };


  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group controlId="formName">
        <Form.Label>Nombre del producto</Form.Label>
        <Form.Control type="text" placeholder='Ingrese Nombre del Producto' value={nombre} onChange={handleNameChange} />
      </Form.Group>

      <Form.Group controlId="formPrice">
        <Form.Label>Consola</Form.Label>
        <Form.Control type="text" placeholder='Ingrese Consola' value={consola} onChange={handleConsoleChange} />
      </Form.Group>
      <Form.Group controlId="formImage"></Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Descripción del producto</Form.Label>
        <Form.Control placeholder='Ingrese Descripción breve del Producto' as="textarea" value={descripcion} onChange={handleDescriptionChange} />
      </Form.Group>

      <Form.Group controlId="formPrice">
        <Form.Label>Precio del producto</Form.Label>
        <Form.Control type="number" value={precio.toLocaleString('es-CL')} onChange={handlePriceChange} />

      </Form.Group>
      <Form.Group controlId="formImage">
        
        <Form.Label>Imagen del producto</Form.Label>
        <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
      </Form.Group>
      
      <Button style={{marginTop:'10px'}} variant="primary" type="submit">
        Crear publicación
      </Button>
    </Form>
  );
};

export default CrearPublicacion;
