import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {
    const [categories, setCategories] = useState(defaultCategories);

    //   const handleAdd = e => {
    //     e.preventDefault();
    //     setCategories(cats => [...cats, 'Porto']); // Con Callback | Muy útil
    //   };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map((category, i) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </>
    );
};
