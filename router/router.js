const express = require('express');
const router = express.Router();
const  productController =  require('../controller/product.js');

router.get('/products', productController.getAllProducts);

router.get('/products/:product_id', productController.getProductById);

router.get('/products/:product_id/styles', productController.getStylesByProductId)

module.exports = router;