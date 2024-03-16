const axios = require('axios');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
require('dotenv').config();
const {
    CODE_AUTH_OTHER_BRANCH
} = process.env;


const contentCtrl = {
    sendReservationRequest: async (req, res) => {
        try {
            const dataOnBody = req.body;
            console.log("dataOnBody", dataOnBody);
            const linkSendReservationRequest = "https://database.azumayareport.com/booking/send_reservation_request";
            await axios.post(linkSendReservationRequest, dataOnBody, {
                headers: { Authorization: CODE_AUTH_OTHER_BRANCH }
            }).then(response => {
                return res.json(response.data)
            });

        } catch (err) {
            console.log("err.message", err.message);
            return res.status(500).json({msg: err.message})
        }
    }, 
}

module.exports = contentCtrl
