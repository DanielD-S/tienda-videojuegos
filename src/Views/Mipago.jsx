import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContextoGlobal from '../Context/ContextoGlobal.jsx';
import ReactModal from 'react-modal';

const Mipago = () => {
  const { id } = useParams();
  const { juegos } = useContext(ContextoGlobal);
  const juegoSeleccionado = juegos.find((juego) => juego.id === parseInt(id));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowConfirmation(true);
      setTimeout(() => {
        setModalIsOpen(false);
        setShowConfirmation(false);
      }, 2000);
    }, 2000);
  }
  return (
    <div style={{ marginTop: '10em', textAlign: 'center' }}>
      <div>
        <p>Estás comprando el juego "<b>{juegoSeleccionado.name}</b>" para <b><i>{juegoSeleccionado.consola}</i></b>.</p>
        <h3>Por ${juegoSeleccionado.price.toLocaleString('es-CL', { minimumFractionDigits: 0 })}</h3>
        <img style={{ width: '250px' }} src={juegoSeleccionado.img} alt={juegoSeleccionado.name}></img>
      </div>
      <hr />
      <div>
      <h2>Paga aquí:</h2>
      <img
        src="https://jumpseller.s3.eu-west-1.amazonaws.com/store/la-mascota/assets/WebPay3.png"
        alt="WebPay3"
        style={{ width: '250px', height: 'auto', margin: '0.5em auto', cursor: 'pointer' }}
        onClick={() => setModalIsOpen(true)}
      />
      </div>
      
     
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Formulario de pago"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '1000'
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '500px',
            height:'450px',
            padding: '2em',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            backgroundColor: '#fff',
            zIndex: '1001'
          }
        }}
      >
        <h2 style={{ marginBottom: '1em' }}>Formulario de pago</h2>
        {showConfirmation ? (
          <div style={{ textAlign: 'center' }}>
            <h3>¡Gracias por comprar con nosotros!</h3>
          </div>
        ) : (
          <form onSubmit={handlePaymentSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '1em' }}>
              <h5 style={{ marginBottom: '0.5em' }}>Tarjeta de crédito</h5>
              <input type="text" name="cardNumber" placeholder="Número de tarjeta" maxLength={16} pattern="\d{16}" required style={{ padding: '0.5em', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '1em', display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '48%' }}>
                <h5 style={{ marginBottom: '0.5em' }}>Fecha de expiración</h5>
                <input
                  type="text"
                  name="expMonth"
                  placeholder="MM"
                  maxLength={2}
                  pattern="\d{2}"
                  required
                  style={{ padding: '0.5em', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ width: '48%' }}>
                <h5 style={{ marginBottom: '0.5em' }}>&nbsp;</h5>
                <input
                  type="text"
                  name="expYear"
                  placeholder="YY"
                  maxLength={2}
                  pattern="\d{2}"
                  required
                  style={{ padding: '0.5em', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>
            </div>
            <div style={{ marginBottom: '1em' }}>
              <h5 style={{ marginBottom: '0.5em' }}>CVV</h5>
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                maxLength={3}
                pattern="\d{3}"
                required
                style={{ padding: '0.5em', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            {isProcessing ? (
              <div style={{ textAlign: 'center' }}>
                <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Spinner" />
                <h5 style={{ marginTop: '1em' }}>Confirmando transacción...</h5>
              </div>
            ) : (
              <button
                type="submit"
                style={{ padding: '0.5em', backgroundColor: '#0069d9', color: '#fff', borderRadius: '4px', border: 'none' }}
              >
                Pagar
              </button>
            )}
          </form>
        )}
      </ReactModal>
    </div>
  );
};

export default Mipago;
