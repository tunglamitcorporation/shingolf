import axios from 'axios';

// export function 

export function sendReservationRequest(data, token) {
    let newURL = "https://database.azumayareport.com/booking/send_reservation_request";
    return axios.post(`${newURL}`, data, {
        headers: { Authorization: token }
    });
}
export function sendMassageRequest(data, token) {
    let newURL = "https://database.azumayareport.com/booking/send_massage_request";
    return axios.post(`${newURL}`, data, {
        headers: { Authorization: token }
    });
}
export function sendContractRequest(data, token) {
    let newURL = "https://database.azumayareport.com/company/send_mail_request_contract";
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