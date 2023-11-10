import React, { useContext } from 'react';
import horca from '../assets/arena_6.jpg';
import { useNavigate } from 'react-router-dom';
import Contexto from '../Contexto/Contexto';

const Final = () => {
  const { laCorrecta } = useContext(Contexto);
  const navegacion = useNavigate();
  return (
    <>
      <div className='cont-inc'>
        <h1 className='res-inc'>Respuesta incorrecta</h1>
        <h2>
          La respuesta correcta era: <strong>{laCorrecta}</strong>
        </h2>
        <div className='imagen'>
          <img src={horca} alt='imagen' />
        </div>
        <button onClick={() => navegacion('/juego/')}>Volver a jugar</button>
      </div>
    </>
  );
};

export default Final;
