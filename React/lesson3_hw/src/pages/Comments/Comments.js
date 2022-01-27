import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const Comments = () => {

    // const [comments,setComments] = useState([])
    // const params = useParams();
    //
    // useEffect(()=>{
    //     postService.getCommentsByPostId(params.id).then(comments => setComments(comments))
    // },[])


    return (
        <div>
            cosafa
            {/*{comments.map(comment => <Comment key={comment.id} comment={comment}/>)}*/}
        </div>
    );
};

export default Comments;