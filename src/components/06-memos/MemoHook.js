import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <div>
        <h1>Memo Hook</h1>
        <h3> Memorize <small> { counter } </small> </h3>
        <hr/>
        <p> { memoProcesoPesado } </p>
        <button className='btn btn-primary mx-2' onClick={ increment }> +1 </button>

        <button className='btn btn-success mx-2' onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)} </button>
    </div>
  )
}
