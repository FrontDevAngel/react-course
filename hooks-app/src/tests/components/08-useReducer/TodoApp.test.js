import { shallow, mount } from 'enzyme';
import React from 'react';
import { act } from '@testing-library/react';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../fixtures/demoTodos';

describe('Pruebas componente <TodoApp />', () => {
    // const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn(() => {});

    test('debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de agregar un TODO', () => {
        const wrapper = mount(<TodoApp />);

        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe(
            `Todo App (${demoTodos.length})`,
        );

        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('Debe de eliminar un TODO', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

        expect(wrapper.find('h1').text().trim()).toBe(`Todo App (0)`);
    });
});
