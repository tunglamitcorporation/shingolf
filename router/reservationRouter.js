const router = require('express').Router();
const reservationCtrl = require('../controllers/reservationCtrl');

router.post('/api/4b2eae43-6f7e-459a-81fe-a68eb15522ca', reservationCtrl.sendReservationRequest);

router.post('/api/db653eff-b510-4f83-89a6-c9a8faf8def6', reservationCtrl.findCompanyByName)

module.exports = router
