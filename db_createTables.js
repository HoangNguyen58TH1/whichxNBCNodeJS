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
  // var sql = `CREATE TABLE loaitin (id INT AUTO_INCREMENT PRIMARY KEY,
  // Ten VARCHAR(255),
  // TenKhongDau VARCHAR(255),
  // created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  // updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`;
  var sql = `CREATE TABLE tintuc1 (id INT AUTO_INCREMENT PRIMARY KEY,
    idLoaiTin INT,
    TieuDe VARCHAR(255),
    TieuDeKhongDau VARCHAR(255),
    TomTat VARCHAR(255),
    NoiDung VARCHAR(21844),
    Hinh VARCHAR(255),
    NoiBat INT,
    SoLuotXem INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});