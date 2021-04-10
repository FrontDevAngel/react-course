import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Test to <SearchScreen />', () => {
    it('should show correctly with default values', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path='/search' component={SearchScreen} />
            </MemoryRouter>,
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
    });

    it('should show batman and the input with the value of the queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path='/search' component={SearchScreen} />
            </MemoryRouter>,
        );

        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
    });

    it(`should show error if super hero doesnt exist`, () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=raulo']}>
                <Route path='/search' component={SearchScreen} />
            </MemoryRouter>,
        );

        expect(wrapper.find('.alert-danger').text().trim()).toBe(
            `Couldn't find any raulo hero!`,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('Should call the PUSH to history', () => {
        const history = {
            push: jest.fn(),
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?']}>
                <Route
                    path='/search'
                    component={() => <SearchScreen history={history} />}
                />
            </MemoryRouter>,
        );

        wrapper.find('input').simulate('change', {
            target: {
                name: 'search',
                value: 'batman',
            },
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault: () => {},
        });

        expect(history.push).toHaveBeenCalledWith('?q=batman');
    });
});
