import React from 'react';

import './user.css'

const User = ({user: {id, name, username, email}}) => {
    return (
        <div className={'user'}>
                <p>{id} {name} -- {username} -- {email}</p>
        </div>
    );
};

export default User;