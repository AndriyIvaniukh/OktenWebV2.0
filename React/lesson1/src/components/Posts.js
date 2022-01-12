import React, {useEffect, useState} from 'react';
import Post from "./Post";

const Posts = () => {

    const [posts, setPosts] =useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((resp) => {return resp.json()})
            .then((posts) => {setPosts(posts)});
    },[]);

    return (
        <div>
            {posts.filter(posts=> posts.id<5).map(post => <Post props={post}/>)}
        </div>
    );
};

export default Posts;