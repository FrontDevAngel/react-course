import React from 'react';
import PropTypes from 'prop-types';

export const TodoListItem = ({ todo, i, handleDelete, handleToggle }) => {
    return (
        <div>
            <li className='list-group-item'>
                <p
                    className={`${todo.done && 'complete'}`}
                    onClick={() => handleToggle(todo.id)}>
                    {i + 1}. {todo.desc}
                </p>

                <button
                    onClick={() => handleDelete(todo.id)}
                    className='btn btn-danger'>
                    Borrar
                </button>
            </li>
        </div>
    );
};

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
};
