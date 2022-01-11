import React, {useEffect, useState} from 'react';

const Posts = () => {

    let [posts, setPosts] =useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((resp) => {return resp.json()})
            .then((posts) => {setPosts(posts)});
    },[]);

    return (
        <div>
            {posts.filter(posts=> posts.id<5).map(posts => {return <>
                    <h6>{posts.title}</h6>
                    <p>{posts.body}</p>
                </>}
            )}
        </div>
    );
};

export default Posts;