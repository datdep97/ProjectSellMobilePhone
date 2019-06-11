const Router = require('koa-router');
const CartController = require('../controller/CartController');

const router = new Router();
const cartController = new CartController();

router.get('/remove', cartController.removeCart);

module.exports = router;
