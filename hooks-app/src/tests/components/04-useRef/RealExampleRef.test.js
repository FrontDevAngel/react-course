import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Probar componente <RealExampleRef />', () => {
    const wrapper = shallow(<RealExampleRef />);

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });

    test('debe mostrar el componente <MultipleCustomHooks/>', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
});
