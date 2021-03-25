var mysql      = require('mysql');
var connection = mysql.createConnection({
  user     : 'root',
  password : '',
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