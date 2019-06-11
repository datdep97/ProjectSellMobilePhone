const nunjucks = require('nunjucks');

module.exports = () => {
    nunjucks.configure('./views/Client', {autoescape: true});

    return async (ctx, next) => {
        ctx.nunjucks = nunjucks;
        ctx.render = (template, data) => {
            ctx.body = nunjucks.render(template, {...data, ctx});
        } 
        await next();
    }
}