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
  var sql = "INSERT INTO theloai (tentheloai) VALUES ?";
  var values = [
    ['pháp luật'],
    ['kinh doanh'],
    ['công nghệ'],
    ['xe'],
    ['thể thao'],
    ['giáo dục'],
    ['sức khoẻ'],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});