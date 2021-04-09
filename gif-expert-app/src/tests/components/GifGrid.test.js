import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../Components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas a componente <GifGrid />', () => {
    const category = 'Fc Barcelona';

    test('Hacer match del componente con el SnapShot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [
            {
                id: '1122334455',
                url: 'https://localhost/prueba/2323.png',
                title: 'Prueba de hooks',
            },
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        // expect(wrapper).toMatchSnapshot();

        // Busca si el elemento existe
        expect(wrapper.find('p').exists()).toBe(false);

        // Busca si tenemos componentes existentes y su cantidad
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});
