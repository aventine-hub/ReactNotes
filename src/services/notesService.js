import tokenService from '../utils/tokenService';


const BASE_URL = '/api/notes';

export default {
    getAll,
    create
}

function getAll() {
    return fetch(BASE_URL).then(res => res.json());
}

function create(note) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(note)
    }).then(res => res.json());
}