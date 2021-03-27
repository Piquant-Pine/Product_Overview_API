require('dotenv').config()
require('newrelic');
const express = require('express');
const connection = require('./mysql/connection.js')
const app = express();
const fs = require('fs');
const readline = require('readline');
const router = require('./router/router.js');
const PORT = 3000;
const path = require('path');

// require('./csv10/styles.etl.js');
// Seeding Data (uncomment to run)
// require('./csv/styles.etl.js')
// const product = require('./csv/product.etl.js');
// const feature = require('./csv/features.etl.js');
// const styles = require('./csv/styles.etl.js');
// const skus = require('./csv/skus.etl.js');

app.use('/products', router)

app.get('/test', (req, res) => {
  res.send('testing potato')
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
});