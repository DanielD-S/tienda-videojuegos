import React, { useEffect } from 'react';

const Mipago = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 

  return (
    <div style={{ marginTop: '10em', textAlign: 'center' }}>
      <h2>Pagar aquí:</h2>
      <img
        src="https://jumpseller.s3.eu-west-1.amazonaws.com/store/la-mascota/assets/WebPay3.png"
        alt="WebPay3"
        style={{ width: '300px', height: 'auto', margin: '2em auto' }}
      />
    </div>
  );
};

export default Mipago;