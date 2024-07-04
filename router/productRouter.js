const router = require('express').Router();
const productCtrl = require('../controllers/productCtrl');

router.post('/add_product', productCtrl.addProduct);

router.patch('/update_product/:id', productCtrl.updatePorduct);

router.post('/find_product/:category/:type', productCtrl.findProduct);

router.get('/list_menus', productCtrl.makeListMenu);

router.get('/take_all', productCtrl.takeAll);

router.post('/take_categories/:type', productCtrl.takeListCategory);

router.post('/send_mail_sale', productCtrl.sendMailSale);

router.post('/make_invoice', productCtrl.makeInvoice);

// router.post('/update_picture', productCtrl.updatePicture)


// router.past('/change_category', productCtrl.changeByAdmin);

// router.past('/change_type', productCtrl.changeByAdmin);

// router.post('/api/4b2eae43-6f7e-459a-81fe-a68eb15522ca', reservationCtrl.sendReservationRequest);

// router.post('/api/db653eff-b510-4f83-89a6-c9a8faf8def6', reservationCtrl.findCompanyByName)

module.exports = router