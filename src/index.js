import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextoProvider } from './Context/Contexto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextoProvider>
    <App />
    </ContextoProvider>
  </React.StrictMode>
);
