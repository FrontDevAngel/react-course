import React from 'react';
import'@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('Prueba en componente PrimeraApp', () => {
    // test('Debe de mostrar el mensaje: Hola, soy Ángel', () => {
    //     const saludo = 'Hola, soy Ángel';

    //     const { getByText } = render( <PrimeraApp saludo={saludo} /> );

    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('Debe de mostrar el mensaje: Hola, soy Ángel', () => {
        const saludo = 'Hola, soy Ángel';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, soy Ángel';
        const subtitulo = 'Front End Dev';

        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subtitulo} 
            />
        );

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);

    })  
})