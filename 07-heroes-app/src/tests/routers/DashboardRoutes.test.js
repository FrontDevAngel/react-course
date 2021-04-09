import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';

describe('Pruebas a <DashboardRoutes />', () => {
    test('Debe mostrarse correctamente ', () => {
        const contextValue = {
            user: { logged: false },
            dispatch: jest.fn(),
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrarse el nombre del usuario si esta autenticado', () => {
        const contextValue = {
            user: { logged: false, name: 'Juanito' },
            dispatch: jest.fn(),
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>,
        );

        expect(wrapper.find('.text-info').text().trim()).toBe('Juanito');
    });
});
