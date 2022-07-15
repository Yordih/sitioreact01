import React from 'react';

const ComponenteConVariable = (props) => {
  return (
    <div style={{background: 'yellowgreen'}}>
        <h4>Componente 6. Muestra de recepción y lectura de
            variable, enviada cuando es llamado el componentes
        </h4>
        <span>Lectura de variable: {props.xVariable}</span>
    </div>
  );
}

export default ComponenteConVariable;