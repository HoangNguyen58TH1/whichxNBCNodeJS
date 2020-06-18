// import arr from './test1'
// var arr = require('./test1.js')
// let array = [
//   { idtheloai: 1 }, { idtheloai: 5 }, { idtheloai: 1 },
//   { idtheloai: 1 }, { idtheloai: 1 }, { idtheloai: 7 },
//   { idtheloai: 1 }, { idtheloai: 1 }, { idtheloai: 3 },
//   { idtheloai: 1 }, { idtheloai: 3 }, { idtheloai: 1 },
//   { idtheloai: 5 }, { idtheloai: 5 }, { idtheloai: 6 }
// ]
// let arr = [ 1, 5, 1, 1, 1, 7, 1, 1, 3, 1, 3, 1, 5, 5, 6 ]
// console.log(arr);

// module.exports = function ThongKeSoLieu(param1){
// var arrayPercent = []
// function ThongKeSoLieu(param1) {
// var arrayPercentFunction = function (param1) {
// var arrayMerge = []
var arrayPercentFunction = function (param1) {
  // let arr = param1.map(element => {
  //   return element.idtheloai
  // })
  // console.log('arr:', arr);

  let arr_length = param1.length

  let occurrences = {};
  for (let i = 0; i < arr_length; i++) {
    occurrences[param1[i]] = (occurrences[param1[i]] || 0) + 1;
  }
  console.log('occurrences:', occurrences);

  let object_null = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, }
  // console.log('object_null:', object_null);
  let merge = { ...object_null, ...occurrences }
  console.log('merge:', merge);
  var arrayMerge = Object.values(merge)
  return arrayMerge
  // console.log('arrayMerge:', arrayMerge);

  // arrayPercent = Object.values(merge).map(element => {
  //   return (element / arr_length * 100).toFixed(2);
  // })
  // console.log('a', arrayPercent);
  // return arrayPercent;
}
// arrayPercentFunction(arr)
arrayMergeTotal = arrayPercentFunction(totalArray)
// console.log('ab', arrayMerge);

// module.exports = arrayMerge;
// export {arrayMerge};
