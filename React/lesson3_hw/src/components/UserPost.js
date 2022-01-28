import React from 'react';

const UserPost = ({post}) => {
    return (
        <div>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <hr/>
        </div>
    );
};

export default UserPost;
