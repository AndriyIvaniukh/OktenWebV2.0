import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../services/user.service";
import UserPost from "../../components/UserPost";

const UserPosts = () => {

    const params = useParams();
    const [posts, setPosts] = useState([])

    useEffect(() => {
        userService.getCommentsById(params.id).then(value => setPosts([...value]));
    }, [params.id])

    return (
        <div>
            {posts.map(post => <UserPost key={post.id} post={post}/>)}
        </div>
    );
};

export default UserPosts;
