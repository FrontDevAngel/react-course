import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas a <PrivateRoute />', () => {
    const rest = {
        location: {
            pathname: '/marvel',
        },
    };

    Storage.prototype.setItem = jest.fn();

    test('Debe mostrar el componente si esta autenticado y guardar localStorage', () => {
        /**
         * Para tipos de estructuras que van varios niveles abajo siempre usar mount
         */
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuth={true}
                    component={() => <span>Listo!</span>}
                    {...rest}
                />
            </MemoryRouter>,
        );

        /**
         * Si necesitamos recuperar el no autenticado se debe usar otro metodo ya que el redirect nos regresa un string vacío en el wrapper
         */

        expect(wrapper.find('span').exists()).toBe(true);

        expect(localStorage.setItem).toHaveBeenCalledWith(
            'lastPath',
            '/marvel',
        );
    });

    test('Debe de bloquear el componente si no esta autenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuth={false}
                    component={() => <span>Listo!</span>}
                    {...rest}
                />
            </MemoryRouter>,
        );

        expect(wrapper.find('span').exists()).toBe(false);
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'lastPath',
            '/marvel',
        );
    });
});
