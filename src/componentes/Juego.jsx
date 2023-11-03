import { useEffect, useState } from 'react';
import { PALABROS } from '../assets/palabros';

const Juego = () => {
  const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  const misColores = [
    { backgroundColor: 'white' },
    { backgroundColor: 'green', color: 'white' },
    { backgroundColor: 'red', color: 'white' },
  ];

  const letras_array = letras.split('');
  const [azar, setAzar] = useState(0);
  const [palabra, setPalabra] = useState([]);
  const [misLetras, setMisLetras] = useState([]);
  const [correctas, setCorrectas] = useState([]);
  const [erroneas, setErroneas] = useState([]);

  useEffect(() => {
    setAzar(Math.floor(Math.random() * PALABROS.length));
  }, []);

  useEffect(() => {
    setPalabra(PALABROS[azar].palabro.split(''));
  }, [azar]);

  const pulsado = (e) => {
    const letra = e.target.innerHTML;
    setMisLetras([...misLetras, letra]);
    if (palabra.indexOf(letra) >= 0) {
      setCorrectas([...correctas, letra]);
    } else {
      setErroneas([...erroneas, letra]);
    }
  };

  return (
    <>
      <div className='pregunta'>{PALABROS[azar].pregunta}</div>
      <div className='palabra'>
        {palabra.map((letra, i) =>
          misLetras.indexOf(letra) === -1 ? (
            <div className='palo' key={i}></div>
          ) : (
            <div className='palo' key={i}>
              {letra.toUpperCase()}
            </div>
          )
        )}
      </div>
      <div className='botones'>
        {letras_array.map((letra) =>
          correctas.find((e) => e === letra) ? (
            <button style={misColores[1]} key={letra}>
              {letra}
            </button>
          ) : erroneas.find((e) => e === letra) ? (
            <button style={misColores[2]} key={letra}>
              {letra}
            </button>
          ) : (
            <button style={misColores[0]} key={letra} onClick={pulsado}>
              {letra}
            </button>
          )
        )}
      </div>
      <div className='imagen'></div>
    </>
  );
};

export default Juego;
