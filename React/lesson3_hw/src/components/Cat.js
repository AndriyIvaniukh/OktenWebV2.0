import React from 'react';

const Cat = ({cat, dispatch}) => {
    return (
        <div>
            {cat.name}
            <button onClick={() => dispatch({type:'DELETE_CAT', payload: cat.name})}>delete</button>
        </div>
    );
};

export default Cat;