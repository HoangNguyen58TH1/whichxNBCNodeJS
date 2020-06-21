// var fs = require('fs');
// import { arrayTrains } from './test.js'
// var arrayTrains = []
var arrayTrains = require('./test')

console.log(arrayTrains);
console.log(Array.isArray(arrayTrains));


// fs.readFile('test.js', 'utf8', function (err, data) {
//     if (err) throw err;
//     // if(err){
//     //   return console.log(err);
//     // }
//     // console.log('data');
//     // console.log(data);
//     const content = data
//     F1(content)
// });
// function F1(param){
//   // console.log(param);
//   // console.log(typeof param);
//   let index = param.lastIndexOf('arrayTrains')
//   // console.log(index);
//   let stringArray = param.slice(index)
//   console.log(stringArray);
//   // console.log(stringArray[0]);
//   // console.log(stringArray[stringArray.length-1]);


// }