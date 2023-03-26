import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Barra from './Components/Barra'
import Home from './Views/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Barra></Barra>
     <Routes>
    <Route path='/' element={<Home></Home>}>

    </Route>


     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
