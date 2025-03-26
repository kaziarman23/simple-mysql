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

// Create Tables
const createUserTable = `
    CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`;

pool
  .promise()
  .execute(createUserTable)
  .then(() => {
    console.log("users table is ready");
  })
  .catch((err) => {
    console.log("Error creating users table", err);
  });


module.exports = pool.promise();
