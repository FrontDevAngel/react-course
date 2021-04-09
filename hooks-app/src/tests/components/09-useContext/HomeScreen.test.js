import React from 'react';
import { shallow, mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen />', () => {
    const user = {
        id: 123456,
        name: 'Ángel Pantoja',
    };

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{ user, setUser }}>
            <HomeScreen />
        </UserContext.Provider>,
    );
    it('debe de mostrarste correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
