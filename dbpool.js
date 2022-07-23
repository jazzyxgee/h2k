const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DBACC
});

module.exports = pool;