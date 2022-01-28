import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {urls} from "../../configs/urls";
import User from "../../components/User";
import {userService} from "../../services/user.service";
import "./userPage.css"

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll(urls.users).then(value => setUsers([...value]));
    }, [])


    return (
        <div className={"usersPage"}>
            <div className="users">
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div className="userDetails">
                <Outlet/>
            </div>
        </div>
    );
};

export default UsersPage;
