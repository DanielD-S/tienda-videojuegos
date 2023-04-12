import { Navbar} from 'react-bootstrap';

const Footer = () => {
  return (
    <div style={{marginTop:'35px' }} >
      <Navbar fixed='bottom' className='footer' bg="secondary" variant="dark"  >
        <div style={{display:"flex",flexDirection:'row'}}>
          <h6>© 2020 Copyright: </h6>
          <h7 style={{margin:'2px'}}>thegame.com</h7>
        </div>

        <div>
          <h6>Redes Sociales</h6>
          <i class="fa-brands fa-square-twitter"></i>
          <i class="fa-brands fa-instagram m-2"></i>
          <i class="fa-brands fa-square-facebook"></i>

        </div>
        <div>
          <h6>Contacto</h6>
          <h7><i class="fa-brands fa-whatsapp"></i> +56987459966</h7>
          <h7><i class="fa-regular fa-envelope"></i> admin@thegame.com</h7>
        </div>
        <div>
          <h6>Sucursales</h6>
          <h7><i class="fa-solid fa-building"></i> Av Kennedy 9001 - local 3547 - piso 3</h7>
        </div>
      </Navbar>
    </div>
  )
};

export default Footer; 