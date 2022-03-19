import React, { useEffect, useReducer, useState } from 'react'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';


export const TodoApp = () => {

  

  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  // const hanldeAddTodo = ( newTodo ) => {
  //   dispatch({
  //     type: 'add',
  //     payload: newTodo,
  //   });
  // }

  

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleDelete = (id) => {
    const action = {
      type: 'delete',
      payload: id
    }

    dispatch(action);
  }

  const handleToggle = (id) => {
    dispatch({
      type: 'toggle',
      payload: id
    })
  }

  return (
    <div>
      <h1>TodoApp ({todos.length}) </h1>
      <hr />
      <div className='row p-4'>
        <div className='col-6'>
          <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
        </div>
        <div className='col-6'>
          <TodoAdd dispatch={dispatch} />
        </div>
      </div>
    </div>
  )
}
