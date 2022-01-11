import React, {useEffect, useState} from 'react';

const Comments = () => {

    let [comments, setComments] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((resp) => {return resp.json()})
            .then((comments) => {setComments(comments)});
    },[])

    return (
        <div>
            {comments.map(comments=> {
                return <>
                    <h3>{comments.id}</h3>
                    <h4>{comments.name}</h4>
                    <p>{comments.body}</p>
                </>
            })}
        </div>
    );
};

export default Comments;