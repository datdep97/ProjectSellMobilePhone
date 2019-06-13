const Router = require('koa-router');
const CheckoutController = require('../controller/CheckoutController');

const router = new Router();
const checkoutController = new CheckoutController();

router.get('/checkout', checkoutController.checkout);
router.post('/checkout', checkoutController.sendBill);

module.exports = router;
