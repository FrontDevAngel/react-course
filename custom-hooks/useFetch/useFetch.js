import { useState, useEffect, useRef } from 'react';
export const useFetch = (url) => {
    // Evita que tengamos un error si nuestra llamada a la API tarda mucho
    const isMounted = useRef(true);
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (isMounted.current) {
                    setState({
                        error: null,
                        loading: false,
                        data,
                    });
                }
            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info',
                });
            });
    }, [url]);

    return state;
};
