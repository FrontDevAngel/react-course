import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {
    test('Debe de traer 10 elementos', async () => {
        const gifs = await getGifs('FC Barcelona');

        expect(gifs.length).toBe(10);
    });

    test('Cuando no encuentra la categoría', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});
