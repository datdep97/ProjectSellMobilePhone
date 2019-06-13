class SearchController {

    async search(ctx, next) {
        let categories = await ctx.categoryRepository.getAll();
        let products   = await ctx.productRepository.findProductByName(ctx.query.name);
        ctx.render('search.html', {categories, products, name: ctx.query.name});
    }
}

module.exports = SearchController;
