import React, {useEffect, useState} from 'react';
import Fly from './Fly';

const Flies = () => {

    let [spaseX, setSpaceX] = useState([]);

    useEffect(()=> {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(respond => respond.json())
            .then(json => setSpaceX(json));
    },[]);
    return (
        <div>
            {spaseX.filter(x=>x.launch_year!=='2020').map(x => <Fly props={x}/>)}
        </div>
    );
};

export default Flies;
