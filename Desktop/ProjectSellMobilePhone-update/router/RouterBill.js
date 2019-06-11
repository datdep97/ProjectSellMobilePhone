const Router = require('koa-router');
const BillController = require('../controller/BillController');

const router = new Router();
const billController = new BillController();

router.get('/bill', billController.getBill);

module.exports = router;
