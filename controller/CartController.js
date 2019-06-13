class CartController {
    async addCart(ctx, next) {
        if (ctx.session.idsp) {
            ctx.session.idsp.push(parseInt(ctx.query.id));
        } else {
            ctx.session.idsp = [parseInt(ctx.query.id)];
        }

        ctx.redirect('/cart');
    }

    async cart(ctx, next) {
        if(ctx.session.idsp) {
            if(ctx.session.idsp.length == 0) {
                let text = 'Giỏ Hàng Trống !';
                ctx.render('cart.html', {text});
            } else {
                let cart           = ctx.session.idsp;
                let groupByProduct = await ctx.productRepository.findProductGroupBy(cart);
                ctx.render('cart.html', { groupByProduct });
            }
        }else {
            let text = 'Giỏ Hàng Trống !';
            ctx.render('cart.html', {text});
        }
    }

    async removeCart(ctx, next) {
        var object = ctx.session.idsp;
        for (var x in object) {
            let data = object[x];
            let idsp = ctx.query.idsp;
            if(data == idsp) {
                object.shift(parseInt(idsp));
                break;
            }
        }
        ctx.redirect('/cart');
    }

    async checkout(ctx, next) {
        let cart           = ctx.session.idsp;
        let bill           = await ctx.productRepository.findProductGroupBy(cart);
        let total          = await ctx.productRepository.findPriceProductGroupBy(cart);
        var totalPrice     = 0;
        for(var i = 0; i < total.length; i++) {
            totalPrice += total[i].price;
        }
        ctx.render('checkout.html', {bill, totalPrice});
    }
}
module.exports = CartController;
