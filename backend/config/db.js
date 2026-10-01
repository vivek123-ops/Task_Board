const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "task_board",
});

console.log("MySQL Database Connected");

module.exports = db;
