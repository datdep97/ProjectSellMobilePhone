const Router = require('koa-router');
const ProductController = require('../controller/ProductController');
const logginRequiredMiddleware = require('../middleware/logginRequiredMiddleware');
const multer    = require('koa-multer');

const router = new Router();
const productController = new ProductController();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './views/Admin/images/products');
    },
    filename: function (req, file, cb) {
      let fileFormat = (file.originalname).split(".");
      cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
const upload = multer({ storage: storage });

// Show and Add Product
router.get('/products', logginRequiredMiddleware, productController.getProduct);
router.post('/products', upload.single('image'), logginRequiredMiddleware, productController.postProduct);

// Update Product 
router.get('/products/:id', logginRequiredMiddleware, productController.getUpdate);
router.post('/products/:id', logginRequiredMiddleware, productController.postUpdate);

// Delete Product
router.get('/delete/:id', logginRequiredMiddleware, productController.delete);

module.exports = router;
