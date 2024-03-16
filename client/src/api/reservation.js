import axios from 'axios';

// export function 

export function sendReservationRequest(data, token) {
    let newURL = "/reservation/api/4b2eae43-6f7e-459a-81fe-a68eb15522ca";
    return axios.post(`${newURL}`, data, {
        headers: { Authorization: token }
    });
}

export const findCompanyByRequest = (value, token) => {
    let newURL = "/reservation/api/db653eff-b510-4f83-89a6-c9a8faf8def6" ;
    return axios.post(`${newURL}`, { value }, {
        headers: { Authorization: token }
    });
}