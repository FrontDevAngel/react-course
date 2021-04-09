import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Prueba en componente CounterApp', () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    // Función que se tira cada vez que iniciamos una prueba
    wrapper = shallow(<CounterApp />);
  });

  test('Debe de mostrar el valor 10 por defecto', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar el valor enviado por props', () => {
    const wrapper = shallow(<CounterApp value={100} />); // Pasamos el valor directo
    const textoHeader2 = wrapper.find('h2').text().trim(); // Trim: Quitar espacios

    expect(textoHeader2).toBe('100'); // Se puede pasar directo el string
  });

  test('debe incrementar con el botón +1', () => {
    wrapper.find('button').at(0).simulate('click');
    const textoHeader2 = wrapper.find('h2').text().trim();
    expect(textoHeader2).toBe('11');
  });

  test('debe restar con el botón -1', () => {
    wrapper.find('button').at(2).simulate('click');
    const textoHeader2 = wrapper.find('h2').text().trim();
    expect(textoHeader2).toBe('9');
  });

  test('debe colocar el valor por defecto al dar click en reset', () => {
    const wrapper = shallow(<CounterApp value={105} />);

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');

    const textoHeader2 = wrapper.find('h2').text().trim();
    expect(textoHeader2).toBe('105');
  });
});
