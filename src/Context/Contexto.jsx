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
            apellido:'Castillo',
            usuario:'LeonardoCast',
            id:0,
            img:'https://i.ibb.co/YpfCFfX/T6-SHJS135-U03-KKAC7-EHF-5da30769b36c-512.jpg'
        },
        {
            email:'paulina@gmail.com',
            clave: '12345',
            nombre:'Paulina',
            apellido:'Orellana',
            usuario:'Pauli92',
            id:1,
            img:'https://i.ibb.co/Bsfv0CY/337931188-241810621625298-8865787099027906390-n.jpg'
        },
        {
            email:'daniel@gmail.com',
            clave: '112233',
            nombre:'Daniel',
            apellido:'Díaz',
            usuario:'Chocoplatano',
            id:2,
            img:'https://i.ibb.co/b7F0TcB/CHOCOPLAT4-NO-Transparente2.png'
            
        },
        { 
            email:'andres@gmail.com',
            clave: '12345',
            nombre:'Andres',
            apellido:'Gonzalez',
            usuario:'Andrew',
            id:3,
            img:'https://i.ibb.co/SBvsh8G/imagen-2023-04-12-145803983.png'
       
        }
    ]

  return ( 
    <Contexto.Provider value={{lstUsuarios, usuario, setUsuario, setLstProductos, lstProductos}}>
        {props.children}

    </Contexto.Provider>
  )
}

export default Contexto