import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <h5>{comment.id}</h5>
            <h5>{comment.name}</h5>
            <h4>{comment.email}</h4>
            <p>{comment.body}</p>
        </div>
    );
};

export default Comment;