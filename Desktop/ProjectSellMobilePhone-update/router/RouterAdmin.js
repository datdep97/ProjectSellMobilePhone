const Router          = require('koa-router');
const AdminController = require('../controller/AdminController');
const loginRequired   = require('./../middleware/logginRequiredMiddleware');

const router          = new Router();
const adminController = new AdminController(); 

router.get('/admin', loginRequired, adminController.getInfoAdmin);

module.exports = router;