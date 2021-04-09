// import React from 'react';
// import { shallow } from 'enzyme';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../fixtures/demoTodos';

describe('Probar reducer TodoReducer', () => {
    test('Debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    });

    test('Agregar un todo', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Angular',
            done: false,
        };

        const actionTodo = {
            type: 'add',
            payload: newTodo,
        };

        const state = todoReducer(demoTodos, actionTodo);

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('Borrar un TODO', () => {
        const actionTodo = {
            type: 'delete',
            payload: 2,
        };

        const state = todoReducer(demoTodos, actionTodo);

        expect(state.length).toBe(1);
        // expect(state.includes((todo) => todo.id === actionTodo.payload)).toBe( false );
        expect(state).toEqual([demoTodos[0]]);
    });

    test('Cambiar estado [done] de un TODO', () => {
        const actionTodo = {
            type: 'toggle',
            payload: 2,
        };

        const state = todoReducer(demoTodos, actionTodo);

        expect(state[1].done).toBe(true);
        expect(state[0]).toEqual(demoTodos[0]);
    });
});
