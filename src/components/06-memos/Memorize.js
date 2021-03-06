import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment } = useCounter(1);
    const [show, setShow] = useState(true)

  return (
    <div>
        <h1> Memorize <Small value={ counter }/> </h1>
        <hr/>
        <button className='btn btn-primary mx-2' onClick={ increment }> +1 </button>

        <button className='btn btn-success mx-2' onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)} </button>
    </div>
  )
}
