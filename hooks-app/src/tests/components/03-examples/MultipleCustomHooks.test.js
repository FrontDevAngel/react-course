import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useCounter');
jest.mock('../../../hooks/useFetch');

describe('Probar componente <MultipleCustomHooks />', () => {
    const userCountRet = { counter: 10, increment: () => {} };

    test('Debe de mostrarse correctamente', () => {
        useCounter.mockReturnValue(userCountRet);
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar la información', () => {
        useCounter.mockReturnValue(userCountRet);
        useFetch.mockReturnValue({
            data: [
                {
                    author: 'Carthur',
                    quote: 'Hola mundo!',
                },
            ],
            loading: false,
            error: null,
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('p').text().trim()).toBe('Hola mundo!');
        expect(wrapper.find('footer').text().trim()).toBe('Carthur');
    });
});
