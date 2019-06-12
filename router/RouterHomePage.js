const Router = require('koa-router');
const HomeController = require('../controller/HomeController');

const router = new Router();
const homeController = new HomeController();

router.get('/home', homeController.getHome);

module.exports = router;