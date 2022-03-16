import React, { useReducer, useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { todoReducer } from './todoReducer';


export const TodoApp = () => {

  const [{descripcion}, handleInputChange, reset] = useForm({
    descripcion: '',
  });

  const init = () => {
    return [{
      id: new Date().getTime(),
      desc: 'Aprender React',
      done: false,
    }];
  }

  // console.log(descripcion);
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  // console.log(todos);

  const hanldeSubmit = (e) => {

    e.preventDefault();

    if(descripcion.trim().length <= 1) return;
    
    console.log()
    // ? crear una nueva tarea
    const newTodo = {
      id: new Date().getTime(),
      desc: descripcion,
      done: false,
    };

    // ? creamos una accion para mandar al reducer
    const action = {
      type: 'add',
      payload: newTodo,
    };

    // ? mandamos la accion al reducer
    dispatch( action );

    // ? reseteamos el valor del input
    reset();

  }

  return (
    <div>
      <h1>TodoApp ({todos.length}) </h1>
      <hr />
      <div className='row p-4'>
        <div className='col-6'>
          <ul className='list-group list-group-flush'>
            {
              todos.map( (todo, i) => (
                <li key={todo.id} className='list-group-item'>
                  <p>{i + 1}. {todo.desc}</p>
                  <button className='btn btn-danger'>Borrar</button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='col-6'>
          <h4>Agregar Todo</h4>
          <form className='d-flex justify-content-between' onSubmit={ hanldeSubmit }>
           <input type="text" name="descripcion" placeholder='Aprender...' autoComplete='off' onChange={handleInputChange} value={descripcion} />
           <button className='btn btn-outline-success' type='submit'>Agregar</button>
          </form>
        </div>
      </div>
    </div>
  )
}
