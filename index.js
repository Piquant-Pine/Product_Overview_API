const express = require('express');
const connection = require('./mysql/connection.js')
const app = express();
const PORT = 3000;



app.listen(PORT, () => {
  console.log(`listenering on ${PORT}`)
});