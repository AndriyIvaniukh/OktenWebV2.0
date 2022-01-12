import React from 'react';

const Comment = ({props}) => {
    return (
        <div>
            <h3>{props.id}</h3>
            <h4>{props.name}</h4>
            <p>{props.body}</p>
        </div>
    );
};

export default Comment;