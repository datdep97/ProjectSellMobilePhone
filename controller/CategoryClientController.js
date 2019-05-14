class CategoryClientController {
    async getCategoryById(ctx, next) {
        let categories   = await ctx.categoryRepository.getAll();
        let nameCategory = await ctx.categoryRepository.findCategoryById(ctx.params.id);
        let products     = await ctx.productRepository.findProductByIdType(ctx.params.id);
        console.log(products);
        ctx.render('category.html', { categories, nameCategory, products });
    }
}

module.exports = CategoryClientController;
