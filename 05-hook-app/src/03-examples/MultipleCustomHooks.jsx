import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

  const {counter,increment} = useCounter(1);

  const { data, hasError, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  //SI la data tiene un valor, ENTONCES toma el primer elemento del arreglo
  //no se puede desestructurar NULL
  //Negación a NULL es true
  //Doble negación de NULL es false
  //Si data es null, no toma el primer valor del arreglo porque es false con la doble negación

  const { author, quote } = !!data && data[0];

  console.log({ data, hasError, isLoading });
  return (
    <>
      <h1>Breking Bad Quotes</h1>
      <hr />
      {
        isLoading
          ? (
            <div className='alert alert-info text-center'>
              ...Loading
            </div>
          )
          : (
            <blockquote className='blockquote text-end'>
              <p>{quote}</p>
              <footer className='blockquote-footer'>{author}</footer>
            </blockquote>
          )
      }
      <button className='btn btn-primary' disabled={isLoading} onClick={() => increment()}>
        Next Quote
      </button>
    </>
  )
}
