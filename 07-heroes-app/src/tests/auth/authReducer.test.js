import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {
    const user = authReducer(
        {},
        { type: types.login, payload: { name: 'Pedro' } },
    );

    test('Debe de retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, { type: '' });
        expect(state).toEqual({ logged: false });
    });

    test('Debe de autenticar y colocar el name del usuario', () => {
        const state = authReducer(
            { logged: false },
            { type: types.login, payload: { name: 'Pedro' } },
        );

        expect(state).toEqual({ name: 'Pedro', logged: true });
    });

    test('Debe de borrar el nombre', () => {
        const state = authReducer(
            { name: 'Pedro', logged: true },
            { type: types.logout },
        );

        expect(state).toEqual({ logged: false });
    });
});
