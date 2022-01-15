import React from 'react';

import './flies.css';

const Fly = ({props}) => {
    return (
        <div className={'plate'}>
            <div className="left">
                <h4>{props.mission_name}</h4>
                <p>{props.launch_year}</p>
            </div>
            <div className="right">
                <img src={props.links.mission_patch_small}/>
            </div>
        </div>
    );
};

export default Fly;