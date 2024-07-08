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

export function takeDataByType(token, data, type) {
    let newURL = "/product/find_product/product/" + type;
    return axios.post(`${newURL}`, data, {
        headers: { Authorization: token }
    });
}

export function updateProduct(data, id, token) {
    let newURL = "/product/update_product/" + id;
    return axios.patch(`${newURL}`, data, {
        headers: { Authorization: token }
    });
}

export function deleteProduct(id, token) {
    let newURL = "/product/delete_product/" + id;
    return axios.delete(`${newURL}`, {
        headers: { Authorization: token }
    });
}

// export function  updateMultiPicture(data) {
//     let newURL = "/product/update_multi_picture";
//     return axios.patch(`${newURL}`, data);
// }