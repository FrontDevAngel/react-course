import React from 'react';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
    return (
        <div className='auth__container'>
            <div className='auth__col auth__col--intro'>
                <h1 className='auth__title'>Login Screen</h1>
                <h3 className='auth__subtitle'>Inicios de sesión recientes</h3>
                <p>Haz click en tu foto o agregar una cuenta</p>
                <div className='auth__cards'></div>
            </div>
            <div className='auth__col auth__col--form'>
                <form className='form form--auth'>
                    <input
                        type='text'
                        name='email'
                        required
                        autoFocus='1'
                        className='form__input form__input--text'
                        placeholder='Correo electrónico o número de teléfono'
                        aria-label='Correo electrónico o número de teléfono'
                    />
                    <input
                        type='password'
                        name='password'
                        required
                        className='form__input form__input--password'
                        placeholder='Contraseña'
                        aria-label='Contraseña'
                    />
                    <button className='form__submit' type='submit' name='login'>
                        Iniciar Sesión
                    </button>
                    <Link className='form__link' to='/auth/register'>
                        Crear una cuenta
                    </Link>
                </form>
            </div>
        </div>
    );
};
