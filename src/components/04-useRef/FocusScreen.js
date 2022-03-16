import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();
    console.log(inputRef);
    const handleClick = () => {
      document.querySelector('input').select();
    }

  return (
    <div>
        
        <h1>Focus Screen</h1>
        <hr />

        <input className='form-control my-2' ref={ inputRef } placeholder='Nombre'/>
        <button className='btn btn-outline-success my-2' onClick={ handleClick }>Focus</button>

    </div>
  )
}
