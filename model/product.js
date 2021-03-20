const db = require('../mysql/connection.js');
const helper = require('./helper.js');

const getProducts = (options, callback) => {
  const {min, max} = helper.determineMinAndMaxCount(options);
  const queryString = `select * from products limit ${min},${max};`
   db.query(queryString, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, results)
      }
   });
}


const getProductById = (productId, callback) => {
  const queryProduct = `select * from products where product_id=${Number(productId)} `;
  const queryFeature = `select feature, value from features where product_id=${Number(productId)} `;
  db.query(queryProduct, (err, productResults) => {
    if (err) {
      callback(err)
    } else {
      db.query(queryFeature, (err, featureResults) => {
        let productObj = {
          ...productResults[0],
          features: [...featureResults]
        }
        callback(null, productObj);
      })
    }
 });
}

module.exports = {
  getProducts: getProducts,
  getProductById: getProductById
}