class CustomerController {
    async getCustomer(ctx, next) {
        let customers   = await ctx.customerRepository.getAll();
        ctx.render('customer.html', { customers });
    }
}

module.exports = CustomerController;
