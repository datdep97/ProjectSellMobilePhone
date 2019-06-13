const multer = require('koa-multer');
const path = require('path');

class ProductController {
    // Show and Add Product
    async getProduct(ctx, next) {
        let products = await ctx.productRepository.getAll();
        let categories = await ctx.categoryRepository.getAll();
        let promotions = await ctx.promotionRepository.getAll();
        ctx.render('product.html', { products, categories, promotions });
    }

    async postProduct(ctx, next) {

        console.log(ctx.request.body);

        // let data = {
        //     name: ctx.request.body.name,
        //     id_type: ctx.request.body.type,
        //     id_promotion: ctx.request.body.promotion,
        //     price: ctx.request.body.price,
        //     warranty: ctx.request.body.warranty,
        //     image: ctx.request.body.image,
        //     description: ctx.request.body.description 
        // }
        // await ctx.productRepository.add(data);
        // ctx.redirect('/products');
    }

    // Update Product
    async getUpdate(ctx, next) {
        let detailProduct = await ctx.productRepository.findProductById(ctx.params.id);
        ctx.render('UpdateProduct.html', { detailProduct });
    }

    async postUpdate(ctx, next) {
        let data = {
            name        : ctx.request.body.name,
            description : ctx.request.body.description
            
        }
        let id = ctx.params.id;
        await ctx.productRepository.update(data, id);
        ctx.redirect('/products');
    }

    // Delete Product
    async delete(ctx, next) {
        await ctx.productRepository.delete(ctx.params.id);
        ctx.redirect('/products');
    }
}

module.exports = ProductController;