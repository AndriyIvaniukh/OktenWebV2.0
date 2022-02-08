import React from 'react';

const Buttons = ({dispatch, field, name}) => {
    return (
        <div>
            <button onClick={()=>dispatch({type: 'inc',payload: {field, name}})}>inc</button>
            <button onClick={()=>dispatch({type: 'dec',payload: {field, name}})}>dec</button>
            <button onClick={()=>dispatch({type: 'reset',payload: {default: 0, field, name}})}>reset</button>
        </div>
    );
};

export default Buttons;