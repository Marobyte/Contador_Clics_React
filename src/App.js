import './App.css';
import './hojas-de-estilo/boton.css';
import './hojas-de-estilo/contador.css'
import freeCodeCamp from './img/FreeCodeCamp_logo.png'
import Boton from './componentes/Boton'
import Contador from './componentes/Contador';
import { useState } from 'react';



function App() {
  const [numClics, setNumClics] = useState(0,);
  const manejarClic = () => {
    setNumClics(numClics + 1);
  }
  const reiniciarContador = ()=> {
    setNumClics(0);
  }
  return (
    <div className="App">    
      <div className='logo-contenedor'>
        <img 
        className='logo-freecodecamp'
        src={freeCodeCamp}
        alt='Logo de FreeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto = 'Clic'
          esBotondeclic= {true}
          manejarClic={manejarClic} />
        <Boton
        texto = 'Reiniciar'
        esBotondeclic={false}
        manejarClic ={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
