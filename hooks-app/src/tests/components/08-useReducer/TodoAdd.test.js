import shallow from 'enzyme/build/shallow';
import React from 'react';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';
import { demoTodos } from '../fixtures/demoTodos';

describe('Pruebas componente <TodoAdd />', () => {
    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);
    test('debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('no debe de llamar handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() {} });

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('no debe de llamar handleAddTodo', () => {
        const value = 'Aprender atom';

        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description',
            },
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() {} });

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        });

        expect(wrapper.find('input').prop('value')).toBe('');
    });
});
