var mysql      = require('mysql');
var connection = mysql.createConnection({
  user     : 'root',
  password : '',
  database : 'sdc'
});

connection.connect(function(err) {
  if (err) {
    console.error('mysql error connection');
    return;
  }
  console.log('mysql connected');
});


module.exports= connection;