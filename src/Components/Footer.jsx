import {Alert, ModalFooter, Navbar} from 'react-bootstrap';

const Footer = () => {
  return (
    <div style={{marginTop:'35px' , height:'5px'}} >
      <Navbar fixed='bottom' className='footer' bg="secondary" variant="dark"  >

        <div>
          <h4>Redes Sociales</h4>
          <i class="fa-brands fa-square-twitter"></i>
          <i class="fa-brands fa-instagram m-2"></i>
          <i class="fa-brands fa-square-facebook"></i>

        </div>
        <div>
          <h4>Contacto</h4>
          <h6><i class="fa-brands fa-whatsapp"></i> +56987459966</h6>
          <h6><i class="fa-regular fa-envelope"></i> admin@thegame.com</h6>
        </div>
        <div>
          <h4>Sucursales</h4>
          <h6><i class="fa-solid fa-building"></i> Av Kennedy 9001 - local 3547 - piso 3</h6>
        </div>
      </Navbar>
    </div>
  )
};

export default Footer; 