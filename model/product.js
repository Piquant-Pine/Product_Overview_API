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
  //
  // const styleQuery = `select * from styles where product_id=14037;`
  // const styleQuery= `
  //  SELECT * FROM Styles
  //  INNER JOIN SKUs USING (style_id)
  //  INNER JOIN Photos USING (style_id)
  //  WHERE style_id IN (
  //    SELECT style_id FROM styles WHERE product_id=14037
  //  )
  //  GROUP BY style_id
  //  `;

  // Option 2
  // const styleQuery = `WITH styles AS (
  //   SELECT * FROM styles WHERE product_id = 14037
  // ), photo AS (
  //   SELECT
  //     GROUP_CONCAT(photos.url) AS pic,
  //     GROUP_CONCAT(photos.thumbnail_url) AS thic,
  //     photos.style_id AS extra
  //     FROM photos
  //      JOIN styles
  //      ON photos.style_id = styles.style_id
  //     GROUP BY photos.style_id
  // ), skuss AS (
  //   SELECT
  //     GROUP_CONCAT(SKUS.SKU_id) AS skuId,
  //     GROUP_CONCAT(SIZE) AS skuSize,
  //     GROUP_CONCAT(quantity) AS skuQuantity,
  //     SKUS.style_id AS extra
  //     FROM SKUS
  //      JOIN styles
  //      ON SKUS.style_id = styles.style_id
  //      GROUP BY SKUS.style_id
  // )
  // SELECT * FROM styles INNER JOIN photo, skuss WHERE photo.extra = styles.style_id AND skuss.extra = styles.style_id;`

  // OPTION 3
  // const styleQuery = `WITH styles AS (
  //   SELECT * FROM styles WHERE product_id = 14037
  // ), photo AS (
  //   SELECT
  //     GROUP_CONCAT(photos.url) AS url,
  //     GROUP_CONCAT(photos.thumbnail_url) AS thumbnail_url,
  //     photos.style_id AS style_id
  //     FROM photos
  //      JOIN styles
  //      ON photos.style_id = styles.style_id
  //     GROUP BY photos.style_id
  // ), skuss AS (
  //   SELECT
  //     GROUP_CONCAT(SKUS.SKU_id) AS sku_id,
  //     GROUP_CONCAT(SIZE) AS size,
  //     GROUP_CONCAT(quantity) AS quantity,
  //     SKUS.style_id AS style_id
  //     FROM SKUS
  //      JOIN styles
  //      ON SKUS.style_id = styles.style_id
  //      GROUP BY SKUS.style_id
  // )
  // SELECT * FROM styles INNER JOIN photo, skuss WHERE photo.style_id = styles.style_id AND skuss.style_id = styles.style_id;`

  // Option 3
  const styleQuery = `WITH styles AS (
    SELECT * FROM styles WHERE product_id = 721
  ), photo AS (
    SELECT
      GROUP_CONCAT(Photos.url) AS url,
      GROUP_CONCAT(Photos.thumbnail_url) AS thumbnail_url,
      Photos.style_id AS style_id
      FROM Photos
       JOIN styles
       USING (style_id)
      GROUP BY Photos.style_id
  ), skus AS (
    SELECT
      GROUP_CONCAT(SKUs.SKU_id) AS sku_ids,
      GROUP_CONCAT(SIZE) AS sizes,
      GROUP_CONCAT(quantity) AS quantities,
      SKUs.style_id AS style_id
      FROM SKUs
       JOIN styles
       USING (style_id)
       GROUP BY SKUs.style_id
  )
  SELECT * FROM styles INNER JOIN photo, skus WHERE photo.style_id = styles.style_id AND skus.style_id = styles.style_id;`;

  db.query(styleQuery, (err, styleResults) => {
    if (err) {
      console.log(err)
      callback(err)
    } else {
      const styleData = helper.destructureStyleObj(styleResults);
      // const photoSkuQuery = `select p.url, p.thumbnail_url, s.size, s.quantity from photos p inner join skus s on (p.style_id = s.style_id) where s.style_id=65504;`
      // const skuQuery = `select size, quantity from Skus where style_id=65504;`
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