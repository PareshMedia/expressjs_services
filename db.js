var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : '',
  password : '',
  database : 'test'
});

connection.connect()
//mysqlCon.end();
module.exports = connection;