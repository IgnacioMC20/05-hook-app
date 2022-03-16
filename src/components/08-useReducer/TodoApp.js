import React, { useReducer } from 'react'

export const TodoApp = () => {

    const initialState = [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false,

    }]

    const [state] = useReducer(reducer, initialState);
  return (
    <div>
        <h1>TodoApp</h1>
        <hr/>
        <ol>
            <li>Hola</li>
            <li>Mundo</li>
            <li>HJola de Nuevo</li>
        </ol>
    </div>
  )
}
