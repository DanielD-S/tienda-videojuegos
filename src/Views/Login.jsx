import { useState, useContext} from 'react';
import { Card, Form, Button, Spinner } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Css/Style.css';
import Contexto from '../Context/Contexto.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cargando, setCargando] = useState(false);
  const { lstUsuarios, setUsuario } = useContext(Contexto);
  const navigate = useNavigate();

  const validarUsuario = () => {
    setCargando(true);
    const usuarioValido = lstUsuarios.find(
      (usuario) => usuario.email === email && usuario.clave === password
    );

    if (usuarioValido) {
      setTimeout(() => {
        setUsuario({ conectado: true, email: usuarioValido.email });
        setCargando(false);
        navigate('/homeprivado');
      }, 1500);
    } else {
      setCargando(false);
      alert('usuario invalido');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Card>
            <Card.Body>
              <Card.Title>Iniciar sesión</Card.Title>
              <Form>
                <Form.Group>
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                {cargando ? (
                  <Button  style={{ margin: '10px' }} variant="primary" disabled>
                    <Spinner animation="border" size="sm" />
                    Cargando Datos ...
                  </Button>
                ) : (
                  <Button
                    style={{ margin: '10px' }}
                    variant="primary"
                    type="submit"
                    onClick={() => validarUsuario()}
                  >
                    Iniciar sesión
                  </Button>
                )}
              </Form>
            </Card.Body>
          </Card>
        </div>

        {/* FORMULARIO REGISTRO */}

        <div className="col-md-6">
          <Card>
            <Card.Body>
              <Card.Title>¿Aún no tienes cuenta?</Card.Title>
              <p>
                Si es la primera vez que visitas la tienda, por favor regístrate haciendo click en el botón abajo.
              </p>
              <NavLink to="/Registro" className="btn btn-primary">
                Regístrate aquí
              </NavLink>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
