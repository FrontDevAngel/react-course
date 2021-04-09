import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas a componente <GifExpertApp />', () => {
    test('Hacer match del componente con el SnapShot', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['Ámerica', 'Chivas'];

        const wrapper = shallow(
            <GifExpertApp defaultCategories={categories} />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});
