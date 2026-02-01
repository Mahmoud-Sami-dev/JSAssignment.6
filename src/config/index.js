const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "retail_store"
});

connection.connect(err => {
  if (err) {
    console.log("DB Error:", err);
  } else {
    console.log("DB Connected");
  }
});

module.exports = connection;
