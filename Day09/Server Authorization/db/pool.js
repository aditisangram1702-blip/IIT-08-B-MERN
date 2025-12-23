const mysql2 = require("mysql2");

const pool = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "shreyas",
  database: "institute_management_db",
});
module.exports = pool;
