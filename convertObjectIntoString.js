var array = [
  {
    content: 'Ngày 2-6, Công an Quảng Nam cho biết đơn vị này đang điều tra vụ việc một xe hơi có dấu hiệu chuyển nhượng trái phép nhằm mục đích trốn thuế.\n'
  },
  {
    content: 'Trước đó, ngày 26-5, qua công tác tuần tra kiểm soát, Phòng cảnh sát giao thông Công an tỉnh Quảng Nam dừng xe biển số 51A-229.62 nhãn hiệu Lexus RX330 do ông Huỳnh Bá Thanh (44 tuổi, trú quận Bình Thạnh, TP.HCM) lái không có giấy tờ kèm theo.'
  },
  {
    content: 'Qua kiểm tra, lực lượng cảnh sát giao thông phát hiện xe trên có dấu hiệu của việc chuyển nhượng trái phép nhằm mục đích trốn thuế nên đã bàn giao, chuyển hồ sơ cho Phòng cảnh sát kinh tế Công an tỉnh Quảng Nam điều tra xử lý theo thẩm quyền.'
  },
  {
    content: 'Theo đó, Phòng cảnh sát kinh tế đã xác định số khung, số máy xe Lexus RX330 là xe được tạm nhập miễn thuế áp dụng cho đối tượng được quyền ưu đãi miễn trừ trên lãnh thổ Việt Nam được đăng ký biển số 80NN-166.22.'
  },
  {
    content: 'Chủ xe là Văn phòng văn hóa Đại sứ quán Campuchia tại TP Hà Nội, đăng ký lần đầu ngày 21-4-2004, hạn sử dụng đến hết ngày 15-7-2009.'
  },
  {
    content: 'Cơ quan chức năng cũng xác định biển số 51A-229.62 được gắn trên xe này là biển số giả và đang tiếp tục điều tra làm rõ.'
  }
]
// var arrayContent = [];
// for(let obj of array){
//   // console.log(obj);
//   let objContent = Object.values(obj)
//   // console.log(objContent); //array
//   // console.log(typeof objContent);
//   // Array.isArray(obj) ? console.log('true') : console.log('false');
//   arrayContent = arrayContent.concat(objContent)
// }
// console.log('arrayContent :', arrayContent);
// console.log('arrayContent :', typeof arrayContent);
// // var stringContent = arrayContent.join('<br/> ')
// // console.log(stringContent);
// // console.log(typeof stringContent);

var arrayContent = array.map((arrayCurrent) => {
  return arrayCurrent.content
})
console.log(arrayContent);
var string = arrayContent.join('<br>')
console.log(string);
// console.log(typeof arrayContent);
// console.log(Array.isArray(arrayContent));

//
// const str = new String('hoangNguyen')
//  console.log(str);
//  console.log(typeof str);