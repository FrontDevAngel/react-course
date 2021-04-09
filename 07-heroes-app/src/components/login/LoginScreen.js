import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';

        const newTodo = {
            type: types.login,
            payload: {
                name: 'Ángel',
            },
        };

        dispatch(newTodo);

        // Redirige con el registro intacto en el historial
        // history.push('/');

        // Reemplaza el elemento por una nueva entrada en el historial
        history.replace(lastPath);
    };

    return (
        <div className='container mt-5'>
            <h1>Login Screen</h1>
            <hr />
            <button className='btn btn-primary' onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};
