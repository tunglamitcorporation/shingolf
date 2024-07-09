const router = require('express').Router();
const productCtrl = require('../controllers/productCtrl');

router.post('/add_product', productCtrl.addProduct);

router.patch('/update_product/:productCode', productCtrl.updateProduct);

router.post('/find_product/:category/:type', productCtrl.findProduct);

router.get('/list_menus', productCtrl.makeListMenu);

router.get('/take_all', productCtrl.takeAll);

router.post('/take_categories/:type', productCtrl.takeListCategory);

router.post('/send_mail_sale', productCtrl.sendMailSale);

router.get('/change_with_request', productCtrl.changeWithRequest);

router.delete('/delete_product/:productCode', productCtrl.deleteProduct)

router.post('/make_order', productCtrl.makeOrder);

router.get('/take_order_by_type/:type', productCtrl.takedataOrderByType);

module.exports = router