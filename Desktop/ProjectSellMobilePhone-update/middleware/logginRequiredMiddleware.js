const logginRequiredMiddleware = async (ctx, next) => {
    if (ctx.authenticator.check()) {
        ctx.user = await ctx.authenticator.user();
        await next();
    } else {
        ctx.redirect('/login');
    }
}

module.exports = logginRequiredMiddleware;