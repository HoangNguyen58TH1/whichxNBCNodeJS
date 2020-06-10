var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  // database  : 'testbdnodejs'
  database: "homestead_custom"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO loaitin (Ten, TenKhongDau) VALUES ?";
  var values = [
    ['pháp luật', 'phap-luat'],
    ['kinh doanh','kinh-doanh'],
    ['công nghệ', 'cong-nghe'],
    ['xe', 'xe'],
    ['thể thao', 'the-thao'],
    ['giáo dục', 'giao-duc'],
    ['sức khoẻ', 'suc-khoe'],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});