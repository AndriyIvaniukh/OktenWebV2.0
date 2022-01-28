import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {photosService} from "../../services/photos.service";
import Photo from "../../components/Photo";
import "./photosByAlbum.css"

const PhotosByAlbum = () => {

    const params = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        photosService.getByAlbumsID(params.albumId).then(value => setPhotos([...value]));
    }, [params.albumId])

    return (
        <div className={'photos'}>
            {photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export default PhotosByAlbum;
