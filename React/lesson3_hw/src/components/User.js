import React from 'react';

import "./user.css"
import {Link} from "react-router-dom";

const User = ({user: {id, name}}) => {
    return (
        <div className={'user'}>
            <div className="info">
                {`${id}. ${name}`}
            </div>

            <div className="detailsButton">
                <Link to={`${id}`}>
                    <button>Details</button>
                </Link>
                <Link to={`${id}/albums`}>
                    <button>UserAlbums</button>
                </Link>
            </div>
        </div>
    );
};

export default User;
