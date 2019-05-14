const Router = require('koa-router');
const PromotionController = require('../controller/PromotionController');
const logginRequiredMiddleware = require('../middleware/logginRequiredMiddleware');

const router = new Router();
const promotionController = new PromotionController();

// Show and Add Promotion 
router.get('/promotion', logginRequiredMiddleware, promotionController.getPromotion);
router.post('/promotion', logginRequiredMiddleware, promotionController.postPromotion);

// Update Promotion 
router.get('/promotion/:id', logginRequiredMiddleware, promotionController.getUpdate);
router.post('/promotion/:id', logginRequiredMiddleware, promotionController.postUpdate);

// Delete Promotion 
router.get('/delete/:id', logginRequiredMiddleware, promotionController.delete);

module.exports = router;