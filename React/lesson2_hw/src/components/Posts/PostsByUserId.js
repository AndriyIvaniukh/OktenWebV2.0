import React from 'react';
import PostByUserId from "./PostByUserId";

const PostsByUserId = ({userPosts}) => {

    return (
        <div>
            {userPosts.map(userPost => <PostByUserId key={userPost.id} userPost={userPost} />)}
        </div>
    );
};

export default PostsByUserId;