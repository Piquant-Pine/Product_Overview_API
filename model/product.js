const db = require('../mysql/connection.js');

const getFirstTenProducts = (callback) => {
  //  const queryString  = `SELECT * FROM PRODUCTS WHERE product_id > 1000 && product_id < 1005`;
  // const queryString  = `SELECT * FROM PRODUCTS WHERE product_id = 100005`;
  // const queryString  = `SELECT * FROM PRODUCTS WHERE name = 'Laura Romper'`;
  const queryString  = `SELECT * FROM PRODUCTS WHERE product_id = 157424`;
   db.query(queryString, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, results)
      }
   })
}

module.exports = {
  getFirstTenProducts: getFirstTenProducts
}