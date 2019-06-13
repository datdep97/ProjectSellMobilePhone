class HomeController {

    async getHome(ctx, next) {
        let categories = await ctx.categoryRepository.getAll();
        let products   = await ctx.productRepository.getAll();
        ctx.render('index.html', {categories, products});
    }
}

module.exports = HomeController;
