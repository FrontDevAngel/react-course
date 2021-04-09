import { heroes } from '../data/heroes-with-desc';

export const getHeroesById = (id) => {
    return heroes.find((hero) => hero.id === id);
};
