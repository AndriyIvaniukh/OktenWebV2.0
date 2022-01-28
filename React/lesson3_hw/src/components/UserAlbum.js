import React from 'react';
import {Link} from "react-router-dom";

const UserAlbum = ({album}) => {

    return (
        <div>
            Id: {album.id}<br/>
            UserID: {album.userId}<br/>
            Title: {album.title}<br/>

            <Link to={`photos/albumId=${album.id}`}><button>Photos</button></Link>
            <hr/>
        </div>
    );
};

export default UserAlbum;
