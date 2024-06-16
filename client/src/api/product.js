import axios from 'axios';

// export function 

export function takeAll(token) {
    let newURL = "/product/take_all";
    return axios.get(`${newURL}`, {
        headers: { Authorization: token }
    });
}

export function  makeListMenu(token) {
    let newURL = `/product/list_menus`;
    return axios.get(`${newURL}`, {
        headers: { Authorization: token }
    });
}


export function addProduct(data, token) {
    let newURL = "/product/add_product";
    return axios.post(`${newURL}`, data, {
        headers: { Authorization: token }
    });
}