const ItemCollection = require('./../bill/ItemCollection');
const BillingEmail   = require('../bill/BillingEmail');
const PromotionEmail = require('../promotion/PromotionEmail')
class CheckoutController {
    async checkout(ctx) {
        let cart           = ctx.session.idsp;
        let bill           = await ctx.productRepository.findProductGroupBy(cart);
        let total          = await ctx.productRepository.findPriceProductGroupBy(cart);
        let totalPrice     = 0;
        for(let i = 0; i < total.length; i++) {
            totalPrice += total[i].price;
        }
        ctx.render('checkout.html', {bill, totalPrice});
    }

    async sendBill(ctx, next) {
        let fullName       = ctx.request.body.fullname;
        let gender         = ctx.request.body.gender;
        let emailCustomer  = ctx.request.body.email;
        let phone          = ctx.request.body.phone;
        let address        = ctx.request.body.address;
        let note           = 'Xac nhan mua hang';

        let cart           = ctx.session.idsp;
        let infoCustomer = {
            gender   : parseInt(gender),
            name     : fullName,
            email    : emailCustomer,
            address  : address,
            phone    : parseInt(phone),
            note     : note,
        };

        let products = new ItemCollection(await ctx.productRepository.findPriceProductGroupBy(cart));
        let customer = await ctx.customerRepository.add(infoCustomer);

        let firstProduct = products.first();

        // Send mail
        await ctx.mailer.send(new BillingEmail(customer, products));

        if (firstProduct) {
            let relatedProducts = await ctx.productRepository.findProductByIdType(firstProduct.getIdType());

            await ctx.mailer.send(new PromotionEmail(relatedProducts, customer.getEmail()));
        }
        ctx.redirect('success');
    }

    async success(ctx, next) {
        ctx.render('success.html');
    }
}

module.exports = CheckoutController;