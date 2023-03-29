import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Barra from './Components/Barra.jsx'
import Home from './Views/Home.jsx';
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Barra></Barra>
     <Routes>
    <Route path='/' element={<Home></Home>}>

    </Route>


     </Routes>
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
