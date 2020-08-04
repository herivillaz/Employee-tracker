const util = require("util");
const mysql = require("mysql");


// create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",

  // // Your port;
  // port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "h20982896villaz",
  database: "employees_db"
});

// connect to the mysql server and sql database
connection.connect();
connection.query = util.promisify(connection.query);

  module.exports = connection;
