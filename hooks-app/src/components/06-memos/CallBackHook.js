import React, { useState, useCallback, useEffect } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {
    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // };

    // Callback hook
    // Cuando ocupamos mandar una función a un componente hijo

    const increment = useCallback(
        (num = 1) => {
            setCounter((c) => c + num);
        },
        [setCounter],
    );

    // Con useEffect la función no cambia pero s lo hicieramos con el state estaría cambiando todo el tiempo
    useEffect(() => {
        // ????
    }, [increment]);

    return (
        <div>
            <h1>Use Callback Hook {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />
        </div>
    );
};
