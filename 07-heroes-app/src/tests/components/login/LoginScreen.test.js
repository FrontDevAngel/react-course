import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('Test in <LoginScreen />', () => {
    const history = {
        replace: jest.fn(),
    };

    const contextValue = {
        dispatch: jest.fn(),
    };

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <LoginScreen history={history} />
            </MemoryRouter>
        </AuthContext.Provider>,
    );

    it('should match with snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should make the dispatch and navigate to dc', () => {
        const handleSubmit = wrapper.find('button').prop('onClick');

        handleSubmit();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Ángel',
            },
        });

        expect(history.replace).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath', '/dc');

        handleSubmit();
        expect(history.replace).toHaveBeenCalledWith('/dc');
    });
});
