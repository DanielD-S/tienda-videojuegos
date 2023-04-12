import { createContext, useState } from "react";

export const Contexto = createContext ({});

export const ContextoProvider = (props) => {

    const [usuario, setUsuario] = useState({});

    const [lstProductos, setLstProductos] = useState([]);

    const lstUsuarios = [
        {
            email:'leonardo@gmail.com', 
            clave: '12345'
        },
        {
            email:'paulina@gmail.com',
            clave: '678910'
        },
        {
            email:'daniel@gmail.com',
            clave: '112233'
        },
        { 
            email:'andres@gmail.com',
            clave: '224466'
        },
    ]

  return ( 
    <Contexto.Provider value={{lstUsuarios, usuario, setUsuario, setLstProductos, lstProductos}}>
        {props.children}

    </Contexto.Provider>
  )
}

export default Contexto