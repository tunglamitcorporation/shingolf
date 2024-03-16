import axios from 'axios';

const sendReservationRequest  = (data, token) => {
    let newURL = "/user/send_reservation_request";
    return axios.post(`${newURL}`, data, {
        headers: { Authorization: token }
    });
}