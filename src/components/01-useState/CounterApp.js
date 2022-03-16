import React, { useState } from 'react'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 1,
        counter2: 2,
    });

    const { counter1, counter2 } = counter;

    return (
        <div>
            <h1>Counter1: {counter1} </h1>
            <h1>Counter2: {counter2} </h1>
            <hr />

            <button className='btn btn-success mx-5' onClick={
                () => setCounter({
                    ...counter,
                    counter1: counter1 + 1
                })
            }>
                Counter1  +1
            </button>

            <button className='btn btn-success mx-5' onClick={
                () => setCounter({
                    ...counter,
                    counter2: Math.pow(counter2, counter1)
                })
            }>
                Counter 2 +2
            </button>


        </div>
    )
}
