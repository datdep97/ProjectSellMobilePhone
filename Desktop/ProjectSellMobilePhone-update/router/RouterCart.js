const Router = require('koa-router');
const CartController = require('../controller/CartController');

const router = new Router();
const cartController = new CartController();

router.get('/cart', cartController.cart);

module.exports = router;
