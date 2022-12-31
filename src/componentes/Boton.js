import React from "react";

function Boton({texto, esBotondeclic, manejarClic}){
    return (
        <button
        className={esBotondeclic ? 'boton-clic' : 'boton-reiniciar'}
            onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default Boton;