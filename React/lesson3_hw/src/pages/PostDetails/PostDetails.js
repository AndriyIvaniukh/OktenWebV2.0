import React, {useEffect, useState} from 'react';
import {Link, useParams, Outlet} from "react-router-dom";

import {postService} from "../../services/post.service";

const PostDetails = () => {

    const [postDetails, setPostDetails] = useState({});
    const params = useParams();

    useEffect(() => {
        postService.getById(params.id).then(details => setPostDetails(details));
    }, [params.id])

    return (
        <div>
            <p>User id : {postDetails.userId}</p>
            <p>Title: {postDetails.title}</p>
            <p>Body: {postDetails.body}</p>
            <Link to={`comments`}>
                <button>Comments</button>
            </Link>
            <Outlet/>
        </div>


    );
};

export default PostDetails;
