import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';

describe('Pruebas a <AppRouter />', () => {
    test('Debe mostrar el login si no está autenticado ', () => {
        const contextValue = {
            user: { logged: false },
            dispatch: jest.fn(),
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el componente marvel si está autenticado', () => {
        const contextValue = {
            user: {
                name: 'Peter Colt',
                logged: true,
            },
            dispatch: jest.fn(),
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>,
        );

        expect(wrapper.find('.navbar').exists()).toBe(true);
    });
});
