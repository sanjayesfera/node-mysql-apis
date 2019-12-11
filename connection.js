var mysql = require('mysql');

// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'esfera',
    database: 'nodemysql'
});
  
// connect to database
dbConn.connect(); 

module.exports = dbConn;