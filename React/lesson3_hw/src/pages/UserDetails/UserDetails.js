import React, {useEffect, useState} from 'react';
import {useParams, Outlet, Link} from "react-router-dom";

import {userService} from "../../services/user.service";

const UserDetails = () => {

    const params = useParams();
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        userService.getById(params.id).then(value => setUserDetails(value));
    }, [params.id])

    return (
        <div>
            <p>{userDetails.name}</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.email}</p>
            <p>{userDetails.phone}</p>
            <Link to={'userPosts'}>
                <button>UserPosts</button>
            </Link>
            <Outlet/>
        </div>


    );
};

export default UserDetails;
