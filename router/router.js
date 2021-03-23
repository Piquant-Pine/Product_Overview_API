const express = require('express');
const router = express.Router();
const  productController =  require('../controller/product.js');

router.get('/', productController.getAllProducts);

router.get('/:product_id', productController.getProductById);

router.get('/:product_id/styles', productController.getStylesByProductId);

router.get('/:product_id/related', productController.getProductRelatedById);

module.exports = router;