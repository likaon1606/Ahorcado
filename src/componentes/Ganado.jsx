import { useNavigate } from 'react-router-dom';

import horca from '../assets/arena_1.jpg';

const Ganado = () => {
  const navegacion = useNavigate();
  return (
    <>
      <div className='cont-gan'>
        <h1>¡Felicidades!, Ganaste.</h1>
        <div className='imagen'>
          <img src={horca} alt='imagen' />
        </div>
        <button onClick={() => navegacion('/juego/')}>Volver a jugar</button>
      </div>
    </>
  );
};

export default Ganado;
