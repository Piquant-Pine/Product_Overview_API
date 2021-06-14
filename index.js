require('dotenv').config()
const express = require('express');
const connection = require('./mysql/connection.js')
const app = express();
const fs = require('fs');
const readline = require('readline');
const router = require('./router/router.js');
const PORT = 3000;
const path = require('path');

// serving loader.io for stress testing
app.use(express.static('public'));

// UNCOMMENT TO SEED DATA FROM CSV FILES
// require('./csv/styles.etl.js')
// require('./csv/product.etl.js');
// require('./csv/features.etl.js');
// require('./csv/styles.etl.js');
// require('./csv/skus.etl.js');

app.use('/products', router)

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
});