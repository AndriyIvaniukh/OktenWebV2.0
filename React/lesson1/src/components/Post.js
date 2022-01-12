import React from 'react';

const Post = ({props}) => {
    return (
        <div>
            <h6>{props.title}</h6>
            <p>{props.body}</p>
        </div>
    );
};

export default Post;