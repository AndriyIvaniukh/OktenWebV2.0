import {urls} from "../configs/urls";

const getAll = () => {
    return fetch(urls.posts).then(value => value.json())
}

export const postsServices = {
    getAll
}