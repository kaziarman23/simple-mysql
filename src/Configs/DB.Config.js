const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: process.env.DB_CONNECTION,
});

pool.getConnection((error, connection) => {
  if (error) {
    console.error("Database connection failed:", error);
  } else {
    console.log("Connected to MySQL database");
    connection.release();
  }
});

module.exports = pool.promise();
