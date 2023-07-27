const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const db = new mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  multipleStatement: true
});

module.exports = db;


//
// const connection = mysql.createConnection({
//   host: 'localhost',  // Replace with your database host
//   user: 'root',  // Replace with your database username
//   password: 'password',  // Replace with your database password
//   database: 'db_buymore'  // Replace with your database name
// });
//
// // Establish the connection
// db.connect((err) => {
//   console.log(process.env)
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the database!');
// });
