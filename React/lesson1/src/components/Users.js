import React, {useEffect, useState} from 'react';
import User from "./User";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                return resp.json()
            })
            .then((users) => {
                setUsers(users)
            });
    }, []);


    return (
        <div>
            {users.map(user => <User props={user}/>)}
        </div>
    );
};

export default Users;