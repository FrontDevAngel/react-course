import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';

describe('Preubas en <Navbar />', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: { logged: true, name: 'Bubu' },
    };

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>,
    );

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Bubu');
    });

    test('Debe de llamar logout y usar history', () => {});
});
