class CategoryController {

    // Show and Add Category
    async getCategory(ctx, next) {
        let categorys = await ctx.categoryRepository.getAll();
        ctx.render('category.html', { categorys });
    }

    async postCategory(ctx, next) {
        let data = {
            name       : ctx.request.body.name,
            description: ctx.request.body.description,
            status     : 1
        }
        await ctx.categoryRepository.add(data);
        ctx.redirect('/categories');
    }

    // Update Category
    async getUpdate(ctx, next) {
        let detailCategory = await ctx.categoryRepository.findCategoryById(ctx.params.id);
        ctx.render('UpdateCategory.html', { detailCategory });
    }

    async postUpdate(ctx, next) {
        let data = {
            name       : ctx.request.body.name,
            description: ctx.request.body.description,
            status     : ctx.request.body.status,
        }
        let id = ctx.params.id;
        await ctx.categoryRepository.update(data, id);
        ctx.redirect('/categories');
    }

    // Delete Category
    async delete(ctx, next) {
        await ctx.categoryRepository.delete(ctx.params.id);
        ctx.redirect('/categories');
    }
}

module.exports = CategoryController;
