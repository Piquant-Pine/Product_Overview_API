var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: '18.144.58.85',
  port: '3306',
  user     : 'guest',
  password : 'Guest123#',
  database : 'sdc2'
});


connection.connect(function(err) {
  if (err) {
    console.log('TESTING ERROR CONNECTION')
    console.log(err)
    return;
  }
  console.log('mysql connected');
});


module.exports= connection;