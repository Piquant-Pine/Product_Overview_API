const db = require('../mysql/connection.js');
const helper = require('./helper.js');

const getFirstTenProducts = (options, callback) => {
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

module.exports = {
  getFirstTenProducts: getFirstTenProducts
}