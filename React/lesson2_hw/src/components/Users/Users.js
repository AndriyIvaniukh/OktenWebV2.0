import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "./User";
import './users.css'
import UserDetails from "./UserDetails";
import {postsServices} from "../../services/posts.services";
import PostsByUserId from "../Posts/PostsByUserId";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [userPosts, setUserPosts] = useState(null);


    useEffect(() => {
        userService.getAll().then(value => setUsers(value));
    }, [])

    const getUserById = (id) => {
        userService.getById(id).then(value => setUser(value));
    }

    const getPostsByUserId = (id) => {
        postsServices.getAll().then(value => setUserPosts(value.filter(value => value.userId === id)));
    }

    return (
        <div className={'main'}>
            <div className="userAndUserDetails">
                <div className="users">
                    {users.map(value => <User key={value.id} user={value} getUserById={getUserById}/>)}
                </div>
                <div className="userDetails">
                    {user && <UserDetails user={user} getPostByUserId={getPostsByUserId}/>}
                </div>
            </div>
            <div className="userPosts">
                {userPosts && <PostsByUserId userPosts={userPosts}/>}
            </div>
        </div>
    );
};

export default Users;