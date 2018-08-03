import axios from 'axios';
// import { fromPromise } from 'fromPromise';

export function getPhotos() {
     return axios.get('https://5afcb2652cfff500145ad83f.mockapi.io/api/v1/fotos');
    // return fromPromise(axios.get('https://5afcb2652cfff500145ad83f.mockapi.io/api/v1/fotos'));
}