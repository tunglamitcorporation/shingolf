const router = require('express').Router();
const contentCtrl = require('../controllers/contentCtrl.js');

router.get('/api/ac90d328-c5d5-473a-8902-3c00d2b2f58a/:type', contentCtrl.loadDataContent);

router.get('/api/2cbdf4a0-cd03-427d-b398-2e55ff9de550/:language/:target', contentCtrl.loadDataContentWithTarget);

router.post('/api/46456bae-eae6-457f-9b33-5810200e0c84', contentCtrl.updateContent);

module.exports = router
