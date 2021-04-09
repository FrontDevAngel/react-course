import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {
    const [formValues, handleInputsChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formValues;

    // Mala practica, no se pueden usar hooks de manera condicional
    // if (true) {
    //     const [state, setstate] = useState(initialState)
    // }

    // useEffect(() => {
    //     // console.log('hey');
    // }, []);

    // useEffect(() => {
    //     // console.log('Form state Cambio');
    // }, [formState]);

    useEffect(() => {
        console.log('Email Cambio');
    }, [email]);

    // const handleInputChange = ({ target }) => {
    //     setFormState({
    //         ...formState,
    //         [target.name]: target.value,
    //     });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>useEffect</h1>
            <hr />

            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputsChange}
                />
            </div>

            <div className='form-group'>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputsChange}
                />
            </div>

            <div className='form-group'>
                <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='*****'
                    value={password}
                    onChange={handleInputsChange}
                />
            </div>

            <button type='submit' className='btn btn-primary'>
                Guardar
            </button>
        </form>
    );
};
