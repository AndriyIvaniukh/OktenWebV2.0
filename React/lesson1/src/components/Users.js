import React, {useEffect, useState} from 'react';

const Users = () => {

    let [users, setUsers] =useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((resp) => {return resp.json()})
        .then((users) => {setUsers(users)});
},[]);


    return (
        <div>
           {users.map(user => <p>{user.name}</p>)}
        </div>
    );
};

export default Users;