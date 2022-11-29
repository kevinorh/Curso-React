import React from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
  //UseLayoutEffect se ejecuta cuando todas la mutaciones han terminado
  const { counter, increment } = useCounter(1);

  const { data, hasError, isLoading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  console.log({ data, hasError, isLoading });
  return (
    <>
      <h1>Breking Bad Quotes</h1>
      <hr />
      {isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next Quote
      </button>
    </>
  );
};
