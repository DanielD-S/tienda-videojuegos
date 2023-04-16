import React, { useContext, useState } from "react";
import { Card, ListGroup, Button, Form, Spinner } from "react-bootstrap";
import Contexto from "../Context/Contexto";
import { Link } from "react-router-dom";

const MiPerfil = () => {
  const { usuario, updateUser, updateUsuarios } = useContext(Contexto);
  const [editMode, setEditMode] = useState(false);
  const [nombre, setNombre] = useState(usuario.nombre);
  const [apellido, setApellido] = useState(usuario.apellido);
  const [nombreUsuario, setNombreUsuario] = useState(usuario.usuario);
  const [correo, setCorreo] = useState(usuario.email);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = usuario.imagen;
    if (file) {
      const reader = new FileReader();
      const promise = new Promise((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
      });
      reader.readAsDataURL(file);
      imageUrl = await promise;
    }

    const updatedData = {
      nombre: nombre.trim(),
      apellido: apellido.trim(),
      usuario: nombreUsuario.trim(),
      email: correo.trim(),
      imagen: imageUrl,
    };

    setTimeout(() => {
      updateUser(updatedData);
      updateUsuarios(usuario.id, updatedData);
      setEditMode(false);
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ marginTop: "8em" }}>
      <h1>Mi Perfil</h1>
      <div className="perfil">
        <img
          className="imagenP"
          src={usuario.imagen}
          alt="Imagen de perfil"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Link style={{ marginLeft: "12em" }} href="#" onClick={toggleEditMode}>
              <i className="fa-solid fa-pen-to-square"></i> Editar
            </Card.Link>
            <Card.Title>Mis Datos</Card.Title>
          </Card.Body>

          {editMode ? (
            <Form onSubmit={handleSubmit}>
              <ListGroup>
                <ListGroup.Item>
                  Nombre Usuario:{" "}
                  <Form.Control
                  placeholder="Ingresa nombre de usuario"
                    type="text"
                    value={nombreUsuario}
                    onChange={(e) => setNombreUsuario(e.target.value)}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  Nombre:{" "}
                  <Form.Control
                    placeholder="Ingresa tu Nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  Apellido:{" "}
                  <Form.Control
                  placeholder="Ingresa tu Apellido"
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.targetvalue)}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  Correo:{" "}
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu Email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  Imagen de perfil:{" "}
                  <Form.Control type="file" onChange={handleFileChange} />
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <Spinner animation="border" size="sm" /> Actualizando datos...
                    </>
                  ) : (
                    "Guardar cambios"
                  )}
                </Button>
              </Card.Body>
            </Form>
          ) : (
            <ListGroup>
              <ListGroup.Item>Nombre Usuario: {usuario.usuario}</ListGroup.Item>
              <ListGroup.Item>Nombre: {usuario.nombre}</ListGroup.Item>
              <ListGroup.Item>Apellido: {usuario.apellido}</ListGroup.Item>
              <ListGroup.Item>Correo: {usuario.email}</ListGroup.Item>
            </ListGroup>
          )}
          <Card.Body>
            <Link to="/marketplace">
              <Button>Crear Publicación</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MiPerfil;
