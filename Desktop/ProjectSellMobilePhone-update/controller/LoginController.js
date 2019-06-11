class LoginController {

    async getLogin(ctx) {
        if (ctx.authenticator.check()) {
            return ctx.redirect('/dashboard');
        }

        ctx.render('login.html', true);
    }

    async postLogin(ctx, next) {
        const {username, password} = ctx.request.body;
        
        try {
            let user = await ctx.authenticator.attempt(username, password);

            ctx.authenticator.login(user);
            ctx.redirect('/dashboard');

        } catch(e) {
            return ctx.redirect('/login');    
        }
        
    }
}

module.exports = LoginController;