import { useNavigate } from 'react-router-dom';

const Portada = () => {
  const navegacion = useNavigate();

  return (
    <>
      <div className='cont-portada'>
        <h1>Bienvenido al juego del ahorcado</h1>
        <p>
          <strong>Instrucciones:</strong> Debes adivinar a palabra de la
          pregunta que se te haga dando click en cada letra, si la letra está en
          la palabra, aparecera en lugar de los "_" y la letra en cuestión se
          iluminará de verde, caso contrario, se iluminará de rojo. Tienes 5
          oportunidades para adivinar la palabra.
        </p>
        <button className='boton' onClick={() => navegacion('/juego')}>
          Jugar
        </button>
      </div>
    </>
  );
};

export default Portada;
