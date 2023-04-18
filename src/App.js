import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/Style.css'
import Barra from './Components/Barra.jsx'
import Home from './Views/Home.jsx';
import Footer from './Components/Footer.jsx'
import Login from './Views/Login.jsx';
import Registro from './Views/Registro.jsx';
import { useState, useEffect, useContext } from 'react';
import ContextoGlobal from './Context/ContextoGlobal';
import Marketplace from './Views/Marketplace.jsx';
import Favoritos from './Views/Favoritos.jsx';
import DetalleJuego from './Views/DetalleJuego.jsx';
import Miperfil from './Views/Miperfil.jsx';
import HomePrivado from './Views/HomePrivado.jsx';
import NoValido from './Views/NoValido.jsx';
import Contexto from './Context/Contexto.jsx';
import BarraPrivada from './Components/BarraPrivada.jsx'



function App() {

  const [juegos, setJuegos] = useState([]);
  
  const [juegosFiltrados,setJuegosFiltrados] = useState([]);

   //Contexto para ingresar a sesión 
   const { usuario } = useContext(Contexto); 
   

  const getJuegos = async () => {
    const res = await fetch(window.location.origin+'/juegos.json');
    const data = await res.json();
    setJuegos(data);
    

  }
  useEffect(() => {
    getJuegos();
  }, [])

  

  return (
    <div className="Style">
      <ContextoGlobal.Provider value={{juegos, setJuegos, juegosFiltrados,setJuegosFiltrados}}>
        <BrowserRouter>
          {/* Definiendo barra y barra pública */}
        {usuario.conectado ?
        <BarraPrivada ></BarraPrivada>:
        <Barra ></Barra>
        }
          <Routes>
            
            {/* Rutas Públicas */}
            {/* Ruta Home */}
            <Route path='/' element={<Home ></Home>}/>
            {/* Ruta Registro y Login */}
            <Route path='/Login' element={<Login></Login>}>
            </Route> 
            <Route path='/Registro' element={<Registro></Registro>}>
            </Route>
            {/* Ruta Detalle*/}
            <Route path='/Detalle/:id' element={<DetalleJuego></DetalleJuego>}>
            </Route>
            {/* Ruta No valida*/}
            <Route path='*' element={<NoValido></NoValido>}>
            </Route>
            <Route path='/Miperfil' element={<Miperfil></Miperfil>}>
            </Route>


            {/* Rutas Privadas */}
            {usuario.conectado &&
             <>
            {/* Rutas Home Privado */}
            <Route path="/homeprivado" element={<HomePrivado></HomePrivado>}>
            </Route>
            {/* Ruta Marketplace*/}
            <Route path='/Marketplace' element={<Marketplace></Marketplace>}>
            </Route>
            {/* Ruta Mi Perfil*/}
            <Route path="/MiPerfil" element={<Miperfil/>} />
            {/* Ruta Favoritos*/}
            <Route path="/favoritos" element={<Favoritos />} />
            </>}
          </Routes>  
          {/* Footer */}
          <Footer></Footer>
        </BrowserRouter>
      </ContextoGlobal.Provider>

    </div>
  );
}

export default App;
