import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('pruebas en el componente <HookApp />', () => {
    test('Hacer match del componente con el snapShot', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });
});
