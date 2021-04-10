import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { heroeImages } from '../../helpers/heroImages';
import { getHeroesById } from '../../selectors/getHeroeById';

// import batman from '../../assets/heroes/dc-batman.jpg' // importación de imagen estatica
// const heroeImages = require.context('../../assets/heroes', true);

export const HeroScreen = ({ history }) => {
    // Custom Hook de React-router-dom que nos permite traer los parametros de la URL
    const { heroeId } = useParams();

    // Con useMemo podemso memorizar los resukltados si nuestras dependencias se mantienen igual
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

    if (!hero) {
        return <Redirect to='/' />;
    }

    const handleReturn = () => {
        history.length <= 2 ? history.push('/') : history.goBack();
    };

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img
                    // src={`../assets/heroes/${heroeId}.jpg`}
                    // src={batman} // estatico
                    src={heroeImages(`./${heroeId}.jpg`).default}
                    alt={superhero}
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>

            <div className='col-8 animate__animated animate__fadeIn'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Alter ego:</b> {alter_ego}
                    </li>
                    <li className='list-group-item'>
                        <b>Publisher:</b> {publisher}
                    </li>
                    <li className='list-group-item'>
                        <b>First Apperence:</b> {first_appearance}
                    </li>
                </ul>

                <h5 className='mt-4'>Characters</h5>
                <p>{characters}</p>

                <button
                    className='mt-4 btn btn-outline-info'
                    onClick={handleReturn}>
                    Return
                </button>
            </div>
        </div>
    );
};
