import React from 'react';
import { shallow, mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { userDemo } from '../fixtures/userDemo';

describe('Pruebas en <HomeScreen />', () => {
    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{ user: userDemo, setUser }}>
            <LoginScreen />
        </UserContext.Provider>,
    );

    it('debe de mostrarste correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('debe de ejecutar el setUser con el argumento esperado', () => {
        // expect(wrapper).toMatchSnapshot();
        // Primer método
        // wrapper.find('button').simulate('click');

        // Método explicito
        wrapper.find('button').prop('onClick')();

        expect(setUser).toBeCalledWith({
            id: expect.any(Number),
            name: 'Ángel Pantoja',
        });
    });
});
