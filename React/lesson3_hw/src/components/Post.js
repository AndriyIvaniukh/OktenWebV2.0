import React from 'react';
import {Link} from "react-router-dom";

import "./post.css";

const Post = ({post}) => {

    return (
        <div className={'post'}>
            <div className="info">
                {post.id}. {post.title}
            </div>

            <div className="detailsButton">
                <Link to={`${post.id}`}>
                    <button>Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Post;
