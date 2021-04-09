import React from 'react';
// import shallow from 'enzyme/build/shallow';
import { shallow } from 'enzyme';
import { AddCategory } from '../../Components/AddCategory';

describe('Pruebas al componente <AddCategory />', () => {
    const setCategories = jest.fn(); // Funcion simulada de Jest
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    }); // Reiniciar valores antes de cada prueba

    test('Debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Evaluar cambios en el input', () => {
        const input = wrapper.find('input');
        const value = 'Fc Barcelona';
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });
    test('No debe de postear la info en submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() {} });
        expect(setCategories).not.toHaveBeenCalled();
    });
    test('Debe de llamar serCategories y limpiar la caja de texto', () => {
        const value = 'Real Madrid';
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault() {} });

        // De preferencia no usar variables para definir valores find, se quedan con el primer estado y no se actualizan después de simular cambios.

        expect(setCategories).toHaveBeenCalled();
        // Prueba cuantas veces debe ser llamada
        // expect(setCategories).toHaveBeenCalledTimes(1);
        // Prueba si esperabamos que se llamara con una función
        // expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(wrapper.find('input').prop('value')).toBe('');
    });
});
