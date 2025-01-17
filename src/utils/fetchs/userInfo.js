import { URL } from "./constants"


export function getUserInfo({ id, userType }) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    };

    return fetch(`${URL}${!userType ? `/users/${id}` : `/restaurant/${id}`}`, requestOptions)
        .then(resp => resp.json())
        .then(data => data)
        .catch(err => console.log(err))
}