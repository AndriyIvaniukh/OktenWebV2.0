import React from 'react';

import Cat from "./Cat";
import Dog from "./Dog";
import "./animalsList.css"

const AninalsList = ({state, dispatch}) => {
    return (
        <div className={'animalList'}>
            <div className={'CatsList'}>
                {state.cats.map(cat => <Cat cat={cat} dispatch={dispatch}/>)}
            </div>

            <div className={'DogsList'}>
                {state.dogs.map(dog => <Dog dog={dog} dispatch={dispatch}/>)}
            </div>
        </div>
    );
};

export default AninalsList;