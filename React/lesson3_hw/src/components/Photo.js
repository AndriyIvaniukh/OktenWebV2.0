import React from 'react';

import "./photo.css"

const Photo = ({photo}) => {
    return (
        <div className={"photo"}>
            <div className="description">
            Id: {photo.id}<br/>
            Album: {photo.albumId}<br/>
            Title: {photo.title}
            </div>
            <div className="rightPart">
            <img src={photo.url} height={100} alt={'photo'}/>
            </div>

        </div>
    );
};

export default Photo;
