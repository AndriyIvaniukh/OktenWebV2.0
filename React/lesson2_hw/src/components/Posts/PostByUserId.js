import React from 'react';

const PostByUserId = ({userPost:{title,body}}) => {
    return (
        <div>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default PostByUserId;