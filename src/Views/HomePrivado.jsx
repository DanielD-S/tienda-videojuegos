import { useContext }from 'react'; 
import Galeria from '../Components/Galeria.jsx';
import Contexto from '../Context/Contexto.jsx';
import { useNavigate } from 'react-router-dom';


const HomePrivado = () => {

    const { usuario, setUsuario} = useContext(Contexto);
    const navigate =  useNavigate();

    const cerrarApp = () =>{
        setUsuario({conectado: false, nombre: ''});
        navigate('/');
    } 

  return (
   
        <div id="Home">
            <strong>{usuario.email}</strong>
            <Galeria fav={false}></Galeria>

            <button type="button" onClick={() => cerrarApp()}>Salir</button>
        </div>
      
  )
}

export default HomePrivado