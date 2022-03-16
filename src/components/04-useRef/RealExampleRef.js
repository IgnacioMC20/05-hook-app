import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks.js';
export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

  return (
    <div>
        <h1>RealExampleRef</h1>
        <hr/>
        <button className='btn btn-primary my-4' 
        onClick={ () => setShow( !show )}>
            Show/Hide
        </button>
            { show && <MultipleCustomHooks/> }
    </div>
  )
}
