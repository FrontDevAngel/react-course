import { heroes } from '../data/heroes-with-desc';

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no encontrado`);
    }

    return heroes.filter((hero) => hero.publisher === publisher);
};
