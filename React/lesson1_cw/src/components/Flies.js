import React, {useEffect, useState} from 'react';

import './flies.css';

const Flies = () => {

    let [spaseX, setSpaceX] = useState([]);

    useEffect(()=> {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(respond => respond.json())
            .then(json => setSpaceX(json));
    },[]);
    return (
        <div>
            {spaseX.filter(x=>x.launch_year!=='2020').map(x => {
                return <div className={'plate'}>
                    <div className="left">
                        <h4>{x.mission_name}</h4>
                        <p>{x.launch_year}</p>
                    </div>
                    <div className="right">
                        <img src={x.links.mission_patch_small}/>
                    </div>
                </div>
            })}
        </div>
    );
};

export default Flies;
