import shallow from 'enzyme/build/shallow';
import React from 'react';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../fixtures/demoTodos';

describe('Pruebas componente <TodoListItem />', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[0]}
            i={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />,
    );

    test('debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar la función borrar', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('debe de llamar la función toogle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('debe de mostrar el texto correctamente', () => {
        const paragraph = wrapper.find('p');
        expect(paragraph.text().trim()).toBe(`1. ${demoTodos[0].desc}`);
    });

    test('el parráfo debe de tener la clase complete si el TODO.done = true', () => {
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem
                todo={todo}
                i={0}
                handleDelete={() => {}}
                handleToggle={() => {}}
            />,
        );

        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    });
});
