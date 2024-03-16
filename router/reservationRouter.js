const router = require('express').Router();
const reservationCtrl = require('../controllers/reservationCtrl');

router.post('/api/4b2eae43-6f7e-459a-81fe-a68eb15522ca', reservationCtrl.sendReservationRequest);

module.exports = router
