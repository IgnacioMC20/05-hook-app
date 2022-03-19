import React from 'react'
import { useForm } from '../../hooks/useForm';


export const TodoAdd = ({dispatch}) => {

    const [{ descripcion }, handleInputChange, reset] = useForm({
        descripcion: '',
      });

      const hanldeSubmit = (e) => {

        e.preventDefault();
    
        if (descripcion.trim().length <= 1) return;
    
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
        dispatch(action);
    
        // ? reseteamos el valor del input
        reset();
    
      }

    return (
        <div>
            <h4>Agregar Todo</h4>
            <form className='d-flex justify-content-between' onSubmit={hanldeSubmit}>
                <input type="text" name="descripcion" placeholder='Aprender...' autoComplete='off' onChange={handleInputChange} value={descripcion} />
                <button className='btn btn-outline-success' type='submit'>Agregar</button>
            </form>
        </div>
    )
}
