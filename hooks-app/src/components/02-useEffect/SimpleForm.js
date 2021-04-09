import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const { name, email } = formState;

    // Mala practica, no se pueden usar hooks de manera condicional
    // if (true) {
    //     const [state, setstate] = useState(initialState)
    // }

    useEffect(() => {
        console.log('hey');
    }, []);

    useEffect(() => {
        console.log('Form state Cambio');
    }, [formState]);

    useEffect(() => {
        console.log('Email Cambio');
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        });
    };

    return (
        <>
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                />
            </div>

            {name === '123' && <Message />}
        </>
    );
};
