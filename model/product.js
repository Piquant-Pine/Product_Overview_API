const db = require('../mysql/connection.js');
const helper = require('./helper.js');

const getProducts = (options, callback) => {
  const {min, max} = helper.determineMinAndMaxCount(options);
  const queryString = `select * from Products limit ${min},${max};`
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

const getStylesByProductId = (productId, callback) => {
  const styleQuery = `WITH styles AS (
    SELECT * FROM styles WHERE product_id = ${productId}
   ), photo AS (
    SELECT
      GROUP_CONCAT(url) AS url,
      GROUP_CONCAT(thumbnail_url) AS thumbnail_url,
      style_id
    FROM Photos
        INNER JOIN styles
        USING (style_id)
    GROUP BY style_id
   ),skus AS (
    SELECT
      GROUP_CONCAT(sku_id) AS sku_ids,
      GROUP_CONCAT(size) AS sizes,
      GROUP_CONCAT(quantity) AS quantities,
      style_id
    FROM SKUs
        INNER JOIN styles
        USING (style_id)
    GROUP BY style_id
  )
  SELECT * FROM styles INNER JOIN photo, skus WHERE photo.style_id = styles.style_id AND skus.style_id = styles.style_id;`

  db.query(styleQuery, (err, styleResults) => {
    if (err) {
      console.log(err)
      callback(err)
    } else {
      console.log(styleResults);
      const styleData = helper.destructureStyleObj(styleResults);
      let productObj = {
        product_id: productId,
        results: [
          ...styleData
        ]
      }
      callback(null, productObj);
    }
 });
}

const getProductRelatedById = (productId, callback) => {
  const queryRelated = `select * from Related_Product where current_product_id=${Number(productId)} `;
  db.query(queryRelated, (err, relatedResults) => {
    if (err) {
      callback(err)
    } else {
      let relatedProduct = [];
      for (let i = 0; i < relatedResults.length; i++) {
        relatedProduct.push(relatedResults[i].related_product_id);
      }
      callback(null, relatedProduct)
    }
 });
}

module.exports = {
  getProducts: getProducts,
  getProductById: getProductById,
  getStylesByProductId: getStylesByProductId,
  getProductRelatedById: getProductRelatedById
}