class DetailController {

    async getDetail(ctx, next) {
        let product = await ctx.productRepository.findProductById(ctx.query.id);
        let id_type = product.id_type;
        let products = await ctx.productRepository.findProductByIdType(id_type);
        ctx.render('detail.html', {product, products});
    }

}

module.exports = DetailController;
