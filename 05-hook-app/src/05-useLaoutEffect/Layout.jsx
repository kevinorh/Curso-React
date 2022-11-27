import React from 'react'
import { useCounter, useFetch } from '../hooks'
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {

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
        isLoading ? 
        <LoadingQuote/>: 
        <Quote quote={quote} author={author}/>
      }
      <button className='btn btn-primary' disabled={isLoading} onClick={() => increment()}>
        Next Quote
      </button>
    </>
  )
}
