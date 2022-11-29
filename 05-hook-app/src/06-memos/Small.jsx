import React from "react";
import {memo} from 'react';

//MEMO se utiliza para evitar renderizar el componente
//se utiliza cuando hay funcionalidades pesadas y hay depreciación al renderizar constantemente
//SE ENCAPSULA EL COMPONENTE dentro de la función memo
export const Small = memo(({ value }) => {
    console.log('Me volví a dibujar')
  return (
  <small>{value}</small>
  );
});
