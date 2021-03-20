const express = require('express');
const router = express.Router();
const  productController =  require('../controller/product.js');

router.get('/', productController.getAllProducts);

router.get('/:product_id', productController.getProductById)

module.exports = router;