import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        <div className='card'>
            <img
                className='card-img-top'
                src={`./assets/heroes/${id}.jpg`}
                alt={superhero}
            />
            <div className='card-body'>
                <h5 className='card-title'>{superhero}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>{alter_ego}</h6>
                <p className='card-text'>{first_appearance}</p>
                {alter_ego !== characters && (
                    <p className='card-text'>{characters}</p>
                )}
                <p className='card-text'>
                    <small className='text-muted'>{publisher}</small>
                </p>

                <Link to={`./hero/${id}`}>Ver más...</Link>
            </div>
        </div>
    );
};
