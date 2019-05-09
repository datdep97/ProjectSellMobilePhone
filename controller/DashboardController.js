class DashboardController {
    async getDashboard(ctx, next) {
        ctx.render('index.html');
    }

    async logout(ctx) {
        ctx.authenticator.logout();

        ctx.redirect('/login');
    }
}

module.exports = DashboardController;