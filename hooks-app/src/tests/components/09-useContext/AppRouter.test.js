import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { userDemo } from '../fixtures/userDemo';

/**
 * No debemos de probar router de momento porque la gente de router ya lo probo y
 * no hemos pasado argumentos importantes en el router para necesitar identificarlos
 */

describe('Pruebas en el <AppRouter/>', () => {
    const wrapper = mount(
        <UserContext.Provider value={{ user: userDemo }}>
            <AppRouter />
        </UserContext.Provider>,
    );

    it('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
