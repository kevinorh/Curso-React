import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

const [counter, setCounter] = useState(10)

//se utiliza para memorizar funciones que se vuelve a reprocesar solo cuando cambia la dependencia
const incrementFather = useCallback(
  (value) => {
    //También memoriza el valor del counter (10), por eso no sube de 11 el contador
    // setCounter(counter+1)

    //Se puede utilizar de esta forma el setCounter para no memorizar el valor de la variable counter
    // setCounter((value) => value +1);
    setCounter((c) => c + value);
  },
  [],
)


// const incrementFather = () => {
//     setCounter(counter+1)
// }


//SE DEBE MEMORIZAR ESTE COMPONENTE!!!!!!
  return (
    <>
        <h1>useCallback Hook: {counter}</h1>
        <hr/>
        <ShowIncrement increment={incrementFather}/>
    </>
  )
}
