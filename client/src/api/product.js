import axios from 'axios';

// export function 

export function takeAll(token) {
    let newURL = "/product/take_all";
    return axios.get(`${newURL}`, {
        headers: { Authorization: token }
    });
}