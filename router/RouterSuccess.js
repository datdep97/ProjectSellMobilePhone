const Router = require('koa-router');
const CheckoutController = require('../controller/CheckoutController');

const router = new Router();
const checkoutController = new CheckoutController();

router.get('/success', checkoutController.success);

module.exports = router;
