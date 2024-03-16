import axios from 'axios';

export function sendReservationRequest(data, token) {
    let newURL = "/reservation/api/4b2eae43-6f7e-459a-81fe-a68eb15522ca";
    return axios.post(`${newURL}`, data, {
        headers: { Authorization: token }
    });
}