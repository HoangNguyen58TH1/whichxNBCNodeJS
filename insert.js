var mysql = require("mysql");
var config = require("./config.js");
var articles = require("./demoDantri.js");
// import {articles} from './demoDantri.js'
var connection = mysql.createConnection(config);

console.log('insert.js');
console.log('test: ', articles);

// // câu lệnh insert
// var sql = `INSERT INTO todos1(title,completed)
//            VALUES('Học cách insert dữ liệu vào database',true)`;

// // thực thi câu lệnh insert
// connection.query(sql);

// connection.end();