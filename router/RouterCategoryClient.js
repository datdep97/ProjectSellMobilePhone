const Router = require('koa-router');
const CategoryClientController = require('../controller/CategoryClientController');

const router = new Router();
const categoryClientController = new CategoryClientController();

router.get('/category', categoryClientController.getCategoryById);

module.exports = router;