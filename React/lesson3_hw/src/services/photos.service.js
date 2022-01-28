import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";


export const photosService = {
    getAll: () => axiosService.get(urls.photos).then(value => value.data),
    getByAlbumsID: (albumId) =>  axiosService.get(`${urls.photos}?albumId=${albumId}`).then(value => value.data)
}
