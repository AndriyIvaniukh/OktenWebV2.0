import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {

    return (
        <div>
            {post.id}. {post.title}
            <Link to={'/posts/' + post.id}>Details</Link>
        </div>
    );
};

export default Post;