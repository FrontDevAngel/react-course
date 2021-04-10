import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';

describe('Tests in <HeroScreen />', () => {
    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    };

    it('Should show the redirect component if there is no params in the URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={history} />
            </MemoryRouter>,
        );
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    it('Should show the hero if params is in the URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path='/hero/:heroeId' component={HeroScreen} />
            </MemoryRouter>,
        );

        expect(wrapper.find('.row').exists()).toBe(true);
    });

    it('Should return to previous screen with PUSH', () => {
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                    path='/hero/:heroeId'
                    component={() => <HeroScreen history={history} />}
                />
            </MemoryRouter>,
        );

        wrapper.find('button').prop('onClick')();

        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();
    });

    it('Should return to previous screen with goBack', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                    path='/hero/:heroeId'
                    component={() => <HeroScreen history={history} />}
                />
            </MemoryRouter>,
        );

        wrapper.find('button').prop('onClick')();
        expect(history.goBack).toHaveBeenCalled();
    });

    it(`Should call redirect if hero does'nt exist`, () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider2763728364']}>
                <Route
                    path='/hero/:heroeId'
                    component={() => <HeroScreen history={history} />}
                />
            </MemoryRouter>,
        );

        expect(wrapper.html()).toBe('');
    });
});
