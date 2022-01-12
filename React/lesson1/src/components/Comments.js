import React, {useEffect, useState} from 'react';
import Comment from "./Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((resp) => {
                return resp.json()
            })
            .then((comments) => {
                setComments(comments)
            });
    }, [])

    return (
        <div>
            {comments.map(comment => <Comment props={comment}/>)}
        </div>
    );
};

export default Comments;