import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Probar hook UseForm', () => {
    const initialForm = {
        name: 'Ángel',
        email: 'angelrben@test.com',
    };

    test('Debe de retornar un formulario por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));

        const [values, handleInputsChange, reset] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputsChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('Debe de cambiar el valor del formulario [Name]', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [_, handleInputsChange] = result.current;

        act(() => {
            handleInputsChange({ target: { name: 'name', value: 'Esteban' } });
        });

        const [values] = result.current;
        expect(values).toEqual({ ...initialForm, name: 'Esteban' });
    });

    test('Debe reestablecer los valores del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [_, handleInputsChange, reset] = result.current;

        act(() => {
            handleInputsChange({ target: { name: 'name', value: 'Esteban' } });
            reset();
        });

        const [values] = result.current;
        expect(values).toEqual(initialForm);
    });
});
