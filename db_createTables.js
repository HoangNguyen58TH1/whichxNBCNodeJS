var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testbdnodejs"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // var sql = "CREATE TABLE theloai (id INT AUTO_INCREMENT PRIMARY KEY, tentheloai VARCHAR(255))";
  var sql = "CREATE TABLE tintuc (id INT AUTO_INCREMENT PRIMARY KEY, idtheloai INT, title VARCHAR(255), description VARCHAR(255), content VARCHAR(21844), imageurl VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});