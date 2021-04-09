import React, { useEffect } from 'react';
import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
// import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if (description.trim().length <= 1) return;

    //     const newTodo = {
    //         id: new Date().getTime(),
    //         desc: description,
    //         done: false,
    //     };

    //     const addTodo = {
    //         type: 'add',
    //         payload: newTodo,
    //     };

    //     dispatch(addTodo);
    //     reset();
    // };

    const handleDelete = (todoId) => {
        const deleteTodo = {
            type: 'delete',
            payload: todoId,
        };

        dispatch(deleteTodo);
    };

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId,
        });
    };

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo,
        });
    };

    return (
        <div>
            <h1>Todo App ({todos.length})</h1>
            <hr />

            <div className='row'>
                <div className='col-8'>
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
                <div className='col-4'>
                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </div>
    );
};
