const Router = require('koa-router');
const CartController = require('../controller/CartController');

const router = new Router();
const cartController = new CartController();


router.get('/checkout', cartController.checkout);

router.post('/braintree-transaction', async(context) => {
    const nonce = context.body.nonce;

    await context.braintreeGateway.transaction.sale({
        amount: '10.00',
        paymentMethodNonce: nonce,
        options: {
            submitForSettlement: true
        }
    });

    return {
        payment: 'success'
    }
});
module.exports = router;
