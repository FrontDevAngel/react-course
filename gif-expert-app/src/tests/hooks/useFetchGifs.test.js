import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
    test('Debería retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetchGifs('FC Barcelona'),
        );
        const { data, loading } = result.current;
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toEqual(true);
    });

    test('Debería retornar un array de imgs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetchGifs('FC Barcelona'),
        );
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});
