import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/Style.css'
import Barra from './Components/Barra.jsx'
import Home from './Views/Home.jsx';
import Footer from './Components/Footer.jsx'
import Login from './Views/Login.jsx';
import Registro from './Views/Registro.jsx';
import { useState, useEffect } from 'react';
import ContextoGlobal from './Context/ContextoGlobal';
import Marketplace from './Views/Marketplace';
import Favoritos from './Views/Favoritos';
import DetalleJuego from './Views/DetalleJuego';
import Miperfil from './Views/Miperfil';



function App() {

  const [juegos, setJuegos] = useState([])

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
      <ContextoGlobal.Provider value={{juegos, setJuegos}}>
        <BrowserRouter>
          <Barra  ></Barra>
          <Routes>
            
            {/* Ruta Home */}
            <Route path='/' element={<Home></Home>}/>
          
            {/* Ruta Login */}
            <Route path='/Login' element={<Login></Login>}>
            </Route>
            {/* Ruta Registro */}
            <Route path='/Registro' element={<Registro></Registro>}>
            </Route>
            {/* Falta Añadir mas rutas*/}
            <Route path='/Detalle/:id' element={<DetalleJuego></DetalleJuego>}>
            </Route>
            <Route path="/favoritos" element={<Favoritos />} />
            {/* Falta Añadir mas rutas*/}
            <Route path='/Marketplace' element={<Marketplace></Marketplace>}>
            </Route>
            <Route path="/MiPerfil" element={<Miperfil/>} />

          </Routes>  
          {/* Footer */}
          <Footer></Footer>
        </BrowserRouter>
      </ContextoGlobal.Provider>

    </div>
  );
}

export default App;
