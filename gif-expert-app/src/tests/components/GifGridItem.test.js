import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Test de GifGridItem.test.js', () => {
    const imageData = {
        title: 'I See You Soccer GIF by UEFA',
        url:
            'https://media1.giphy.com/media/Ve7wX45gaOFmw8eeEM/giphy.gif?cid=755024f7e5gkbi9myo8ucsrnlsszjpk7uzacr9t3kxh0xffg&rid=giphy.gif',
    };

    const wrapper = shallow(<GifGridItem {...imageData} />);

    test('Test del componente renderizado comparado con snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(imageData.title);
    });

    test('Debe de igualar el source y alternative name de la imagen con el objeto prueba', () => {
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(imageData.url);
        expect(img.prop('alt')).toBe(imageData.title);
    });

    test('Evaluar que el div contenga la clase de animación : animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        // Ambas analizan lo mismo pero con diferentes metodos
        expect(className.includes('animate__fadeIn')).toBe(true);
        expect(className).toContain('animate__fadeIn');
    });
});
