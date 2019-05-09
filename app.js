require('dotenv').config();
const Koa             = require('koa');
const config          = require('./knexfile');
const knex            = require('knex')(config.development);
const nunjuck         = require('./nunjucks.provider');
const routerLogin     = require('./router/RouterLogin');
const serve           = require('koa-static');
const path            = require('path');
const bodyParser      = require('koa-bodyparser');
const session         = require('koa-session');

const authProvider    = require('./auth/Auth.Provider');
const userProvider    = require('./user/UserProvider');
const hasherProvider  = require('./hasher/hasherProvider');
const routerDashboard = require('./router/RouteDashboard');
const staticPath      = '/views/Admin';

const app = new Koa();

app.keys = ['some-secret-key'];

app.use(serve(
    path.join(__dirname, staticPath)
));
app.use(session(app));
app.use(hasherProvider(10));
app.use(bodyParser());
app.use(nunjuck());
app.use(userProvider(knex));
app.use(authProvider());
app.use(routerLogin.routes());
app.use(routerDashboard.routes());

app.listen(process.env.POST, () => {
    console.log('Server listen port 6060')
});