import { createContext, useState } from "react";

export const Contexto = createContext ({});

export const ContextoProvider = (props) => {

    const [usuario, setUsuario] = useState({});

    const [lstProductos, setLstProductos] = useState([]);

    const lstUsuarios = [
        {
            email:'leonardo@gmail.com', 
            clave: '12345',
            nombre:'Leonardo',
            apellido:'Perez',
            usuario:'LeonBlack'
        },
        {
            email:'paulina@gmail.com',
            clave: '678910',
            nombre:'Paulina',
            apellido:'Orellana',
            usuario:'Pauli92'
        },
        {
            email:'daniel@gmail.com',
            clave: '112233',
            nombre:'Daniel',
            apellido:'Díaz',
            usuario:'Chocoplatano'
        },
        { 
            email:'andres@gmail.com',
            clave: '224466',
            nombre:'Andres',
            apellido:'Gonzalez',
            usuario:'Andrew'
       
        },
    ]

  return ( 
    <Contexto.Provider value={{lstUsuarios, usuario, setUsuario, setLstProductos, lstProductos}}>
        {props.children}

    </Contexto.Provider>
  )
}

export default Contexto