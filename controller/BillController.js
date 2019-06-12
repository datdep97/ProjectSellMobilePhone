class BillController {
    async getBill(ctx, next) {
        let bills   = await ctx.billRepository.getAll();
        ctx.render('bill.html', { bills });
    }
}

module.exports = BillController;
