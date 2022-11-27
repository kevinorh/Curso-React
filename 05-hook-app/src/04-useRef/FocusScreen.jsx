import React from "react";
import { useRef } from "react";

//En este caso se utiliza para asegurarnos que el elemento al
//que hacemos referencia es el que queremos (sin utilizar document)
export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    // document.querySelector('input').select();
    console.log(inputRef)
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button className="btn btn-primary mt-2" onClick={onClick}>
        Set Focus
      </button>
    </>
  );
};
