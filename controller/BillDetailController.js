class BillDetailController {
    async getBillDetail(ctx, next) {
        let billDetail   = await ctx.billDetailRepository.getAll();
        ctx.render('billdetail.html', { billDetail });
    }
}

module.exports = BillDetailController;
