import React, { useEffect } from 'react';

const NoValido = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ marginTop: '8em' }}>Debes Ingresar como Usuario</div>
  );
};

export default NoValido;