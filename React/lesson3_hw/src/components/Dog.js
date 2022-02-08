import React from 'react';

const Dog = ({dog, dispatch}) => {
    return (
        <div>
            {dog.name}
            <button onClick={() => dispatch({type:'DELETE_DOG', payload: dog.name})}>delete</button>
        </div>
    );
};

export default Dog;