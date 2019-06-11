class CategoryClientController {
    async getCategoryById(ctx, next) {
        let categories   = await ctx.categoryRepository.getAll();
        let nameCategory = await ctx.categoryRepository.findCategoryById(ctx.query.id);
        let products     = await ctx.productRepository.findProductByIdType(ctx.query.id);
        ctx.render('category.html', { categories, nameCategory, products });
    }
}

module.exports = CategoryClientController;
