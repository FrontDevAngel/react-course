import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    // use... en useFetchHooks es un standard en el nombre de hooks
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(category).then((imgs) => {
            setState({
                data: imgs,
                loading: false,
            });
        });
    }, [category]);

    return state; // regresa el state;
};
