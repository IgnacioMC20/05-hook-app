import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter( 100 );

    return (
        <div>
            <h1>Counter with Hook: {state} </h1>
            <hr />
            <button className='btn btn-success mx-2' onClick={() => increment()}>+1</button>
            <button className='btn btn-success mx-2' onClick={reset}>reset</button>
            <button className='btn btn-success mx-2' onClick={() => decrement()}>-1</button>
        </div>
    )
}

