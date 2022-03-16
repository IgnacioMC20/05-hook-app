import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect( () => {
    //   console.log('Hey')
    }, []);
    
    useEffect( () => {
    //   console.log('form cambio')
    }, [formState]);
    
    useEffect( () => {
    //   console.log('email cambio')
    }, [email]);
    
    const handleInputName = ({target}) => {
      setFormState({
          ...formState,
          [target.name]: target.value,
      })
    }

  return (
    <div>
        <h1>useEffect</h1>
        <hr/>
        <div className='form-group'>
        <input type="text" name="name" className='form-control my-4' placeholder='Tu nombre' autoComplete='off' value={name} onChange={ handleInputName } />
        <input type="text" name="email" className='form-control my-4' placeholder='Tu email' autoComplete='off' value={email} onChange={ handleInputName } />
        </div>
        { (name === '123') && <Message/> }
    </div>
  )
}
