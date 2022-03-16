import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const Layout = () => {

  const {counter, increment} = useCounter(1);

    const {data} = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    const {quote} = !!data && data[0];
    // console.log(author, quote);


  return (
    <div>
        <h1> LayoutEffect </h1>

      
            <blockquote className='blockquote'>
              <p className='mb-3'>{quote}</p>
            </blockquote>
        <button className='btn btn-primary' onClick={increment}>Siguiente</button>
    </div>
  )
}
