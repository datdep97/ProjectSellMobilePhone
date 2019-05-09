const Router = require('koa-router');
const LoginController = require('../controller/LoginController');

const router = new Router();
const loginController = new LoginController();

router.get('/login', loginController.getLogin);
router.post('/login', loginController.postLogin);
router.get('/hash', async (ctx) => {ctx.body = {hash: await ctx.hasher.generate('123456')}});

module.exports = router;