class PromotionController {
    // Show and Add Promotion 
    async getPromotion(ctx, next) {
        let promotions = await ctx.promotionRepository.getAll();
        ctx.render('promotion', { promotions }); 
    }

    async postPromotion(ctx, next) {
        let data = {
            name: ctx.request.body.name,
            content: ctx.request.body.content
        }
        await ctx.promotionRepository.add(data);
        ctx.redirect('/promotions');
    }

    // Updatae Promotion 
    async getUpdate(ctx, next) {
        let detailPromotion = await ctx.promotionRepository.findPromotionById(ctx.params.id);
        ctx.render('UpdatePromotion.html', { detailPromotion });
    }

    async postUpdate(ctx, next) {
        let data = {
            name: ctx.request.body.name, 
            content: ctx.request.body.content
        }
        let id = ctx.params.id;
        await ctx.promotionRepository.update(data, id);
        ctx.redirect('/promotions');
    }

    // Delete Promotion
    async delete(ctx, next) {
        await ctx.deleteRepository.delete(ctx.params.id);
        ctx.redirect('/promotions');
    }
}

module.exports = PromotionController;