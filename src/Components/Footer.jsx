import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaEnvelope, FaBuilding } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundColor: "#222", color: "#fff", minHeight: '35rem', marginTop:'35px', alignItems:'center' }}>
      <Container>
        <Row>
          <Col md={4} className="footer-section">
            <h5 style={{ textShadow: "1px 1px #000" }}>theGame</h5>
            <p style={{ textShadow: "1px 1px #000", maxWidth: "300px" }}></p>
          </Col>
          <Col md={2} className="footer-section">
            <h5 style={{ textShadow: "1px 1px #000" }}>Redes Sociales</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com"><FaFacebook /></a>
              <a href="https://www.twitter.com"><FaTwitter /></a>
              <a href="https://www.instagram.com"><FaInstagram /></a>
            </div>
          </Col>
          <Col md={3} className="footer-section">
            <h5 style={{ textShadow: "1px 1px #000" }}>Contacto</h5>
            <div className="contact-info">
              <p style={{ textShadow: "1px 1px #000", maxWidth: "200px" }}><FaWhatsapp /> +56987459966</p>
              <p style={{ textShadow: "1px 1px #000", maxWidth: "200px" }}><FaEnvelope /> admin@thegame.com</p>
            </div>
          </Col>
          <Col md={3} className="footer-section">
            <h5 style={{ textShadow: "1px 1px #000" }}>Sucursales</h5>
            <div className="location-info">
              <p style={{ textShadow: "1px 1px #000", maxWidth: "300px" }}><FaBuilding /> Av Kennedy 9001 - local 3547 - piso 3</p>
            </div>
          </Col>
        </Row>
        <hr className="footer-divider" style={{ borderColor: "#fff" }} />
        <Row>
          <Col md={12} className="text-center">
            <p style={{ textShadow: "1px 1px #000" }}>&copy; 2023 theGame. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;


