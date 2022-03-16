import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formValues;
    useEffect( () =>{
        console.log('email Cambio')
    }, [email]);
    
    const hanldeSubmit = (event) => {
      event.preventDefault();
      console.log(formValues);
      
    }

  return (
    <form onSubmit={hanldeSubmit}>
        <h1>FormWithCustomHook</h1>
        <hr/>
        <div className='form-group'>
        <input type="text" name="name" className='form-control my-4' placeholder='Tu nombre' autoComplete='off' value={name} onChange={ handleInputChange } />
        <input type="text" name="email" className='form-control my-4' placeholder='Tu email' autoComplete='off' value={email} onChange={ handleInputChange } />
        <input type="password" name="password" className='form-control my-4' placeholder='*****' value={password} onChange={ handleInputChange } />
        </div>
        <button type='submit' className='btn btn-primary'>
            Guardar
        </button>
    </form>
  )
}
