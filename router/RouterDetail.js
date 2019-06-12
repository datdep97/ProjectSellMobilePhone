const Router           = require('koa-router');
const DetailController = require('../controller/DetailController');

const router           = new Router();
const detailController = new DetailController();

router.get('/detail', detailController.getDetail);

module.exports = router;
