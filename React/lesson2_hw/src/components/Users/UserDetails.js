import React from 'react';

const UserDetails = ({user, getPostByUserId}) => {
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Name: {user.username}</p>
            <p>Name: {user.phone}</p>
            <button onClick={()=> getPostByUserId(user.id)}> getPosts</button>
        </div>
    );
};

export default UserDetails;