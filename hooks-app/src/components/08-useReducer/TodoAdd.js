import React from 'react';
import { useForm } from '../../hooks/useForm';

import PropTypes from 'prop-types';

export const TodoAdd = ({ handleAddTodo }) => {
    const [{ description }, handleInputsChange, reset] = useForm({
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        handleAddTodo(newTodo);
        reset();
    };

    return (
        <>
            <h4>Agregar Todo</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='description'
                    className='form-control'
                    placeholder='Aprender...'
                    autoComplete='off'
                    value={description}
                    onChange={handleInputsChange}
                />

                <button
                    type='submit'
                    className='btn btn-block btn-outline-primary mt-2'>
                    Agregar
                </button>
            </form>
        </>
    );
};

TodoAdd.propTypes = {
    handleAddTodo: PropTypes.func.isRequired,
};
