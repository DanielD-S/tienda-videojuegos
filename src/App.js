import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/Style.css'
import Barra from './Components/Barra.jsx'
import Home from './Views/Home.jsx';
import Footer from './Components/Footer.jsx'
import Login from './Views/Login.jsx';
import Detalle from './Views/Detalle.jsx';
import { useState, useEffect } from 'react';
import ContextoGlobal from './Context/ContextoGlobal';


function App() {

  const [juegos, setJuegos] = useState([])

  const getJuegos = async () => {
    const res = await fetch(`http://localhost:3000/juegos.json`);
    const data = await res.json();
    setJuegos(data);

  }
  useEffect(() => {
    getJuegos();
  }, [])


  return (
    <div className="Style">
      <ContextoGlobal.Provider value={{juegos}}>
        <BrowserRouter>
          <Barra></Barra>
          <Routes>
            
            {/* Ruta Home */}
            <Route path='/' element={<Home></Home>}>
            </Route>
            {/* Ruta Login */}
            <Route path='/Login' element={<Login></Login>}>
            </Route>
            {/* Falta Añadir mas rutas*/}
            <Route path='/Detalle' element={<Detalle></Detalle>}>
              </Route> 
              
        </Routes>
         
          {/* Footer */}
          <Footer></Footer>
        </BrowserRouter>
      </ContextoGlobal.Provider>

    </div>
  );
}

export default App;
