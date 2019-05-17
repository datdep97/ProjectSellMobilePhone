const Router = require('koa-router');
const CategoryController = require('../controller/CategoryController');
const logginRequiredMiddleware = require('../middleware/logginRequiredMiddleware');

const router = new Router();
const categoryController = new CategoryController();

// Show and Add Category
router.get('/categories', logginRequiredMiddleware, categoryController.getCategory);
router.post('/categories', logginRequiredMiddleware, categoryController.postCategory);

// Update Category
router.get('/categories/:id', logginRequiredMiddleware, categoryController.getUpdate);
router.post('/categories/:id', logginRequiredMiddleware, categoryController.postUpdate);

// Delete Category
router.get('/delete/:id', logginRequiredMiddleware, categoryController.delete);

module.exports = router;