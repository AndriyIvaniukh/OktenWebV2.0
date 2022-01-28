import React, {useEffect, useState} from 'react';
import {useParams, Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";
import UserAlbum from "../../components/UserAlbum";
import "./userAlbum.css"

const UserAlbums = () => {

    const params = useParams();
    const [userAlbums, setUserAlbums] = useState([]);

    useEffect(() => {
        userService.getAlbumsById(params.id).then(value => setUserAlbums([...value]));
    }, [params.id])

    return (
        <div className={'userAlbum'}>
            {userAlbums.map(album => <UserAlbum key={album.id} album={album}/>)}

            <Outlet/>
        </div>

    );
};

export default UserAlbums;
