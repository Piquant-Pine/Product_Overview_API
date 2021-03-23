const productModel = require('../model/product.js');
const helper = require('./helper.js');

const getAllProducts = (req, res) => {
  const page = req.query.page;
  const count = req.query.count;
  const options = helper.displayProductCount(page, count)
  const {pageNum, countNum} = options;
  productModel.getProducts(options, (err, results) => {
    if (err) {
      res.status(400).send('can not get products');
    } else {
      res.status(200).send(results)
    }
  })
}

const getProductById = (req, res) => {
  const productId= req.params.product_id;
  productModel.getProductById(productId, (err, results) => {
    if (err) {
      res.status(400).send('can not get products');
    } else {
      res.status(200).send(results)
    }
  })
}

const getStylesByProductId = (req, res) => {
  const productId= req.params.product_id;
  productModel.getStylesByProductId(productId, (err, results) => {
    if (err) {
      res.status(400).send('can not get products');
    } else {
      res.status(200).send(results)
    }
  })
}

module.exports = {
  getAllProducts: getAllProducts,
  getProductById: getProductById,
  getStylesByProductId: getStylesByProductId
}