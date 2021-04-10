import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

describe('Pruebas en <Navbar />', () => {
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        listen: jest.fn(),
        location: {},
        createHref: jest.fn(),
    };

    const contextValue = {
        dispatch: jest.fn(),
        user: { logged: true, name: 'Bubu' },
    };

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>,
    );

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Bubu');
    });

    test('Debe de llamar logout y usar history', () => {
        const logout = wrapper.find('button').prop('onClick');
        logout();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout,
        });

        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    });
});
