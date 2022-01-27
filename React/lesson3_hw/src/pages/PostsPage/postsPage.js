import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {postService} from "../../services/post.service";
import {urls} from "../../configs/urls";

import Post from "../../components/Post";
import "./postPage.css";

const PostsPage = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.getAll(urls.posts).then(value => setPosts(value));
    }, [])

    return (
        <div className={'postsPage'}>
            <div className="posts">
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div className="postsDetails">
                <Outlet/>
            </div>
        </div>
    );
};

export default PostsPage;