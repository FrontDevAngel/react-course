import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroeByName';

export const SearchScreen = ({ history }) => {
    const location = useLocation();
    // Uso de librería de Query String para obtener el parseo del query sin tantas complicaciones ?q=batman
    const { q: query = '' } = queryString.parse(location.search);

    const [values, handleInputsChange] = useForm({ search: query });
    const { search } = values;

    const heroesFiltered = useMemo(() => getHeroesByName(query), [query]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${search}`);
    };

    return (
        <div>
            <h1>Search Screen</h1>

            <hr />
            <div className='row'>
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type='text'
                            placeholder='Find your hero'
                            className='form-control'
                            name='search'
                            autoComplete='off'
                            onChange={handleInputsChange}
                            value={search}
                        />
                        <button
                            type='submit'
                            className='btn m-1 btn-block btn-outline-primary'>
                            Search...
                        </button>
                    </form>
                </div>
                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />
                    {query === '' && (
                        <div className='alert alert-info'>Search a hero</div>
                    )}

                    {query !== '' && heroesFiltered.length === 0 && (
                        <div className='alert alert-danger'>
                            Couldn't find any {query} hero!
                        </div>
                    )}
                    {heroesFiltered.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </div>
    );
};
