const router = require('express').Router();
const productController = require('../Controllers/productController');
router.post('/', productController.productAdd);
router.get('/', productController.productAll);
router.get('/:productId', productController.productSingle);
router.put('/:productId', productController.productUpdate);
router.delete('/:productId', productController.productDel);

module.exports = router;