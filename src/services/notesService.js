import tokenService from '../utils/tokenService';


const BASE_URL = '/api/notes';

export default {
    getAll,
    create,
    deleteOne,
    update
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

function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}

function update(note) {
    return fetch(`${BASE_URL}/${note._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(note)
    }).then(res => res.json());
}