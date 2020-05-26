var WhichX = require("whichx");

var category = new WhichX();
var labels = ["thể thao", "giáo dục", "kinh doanh"];

category.addLabels(labels);
// console.log('labels: ', labels);
// console.log('labels: ', typeof labels);
// category.addLabels("pokemon");

// category.addData("thể_thao", "triệu_tập ngôi_sao tập_luyện luyện_tập Ronaldo siêu_phẩm cầu_thủ chiêu_mộ câu_lạc_bộ");
// category.addData("giáo_dục", "học_sinh cổng_trường trường trường_học chủ_tịch hiệu_trưởng đại_học THPT THCS tốt_nghiệp điểm thi thi_thử môn");
// category.addData("kinh_doanh", "thu_giữ xử_lý bảo_hiểm thị_trường tập_đoàn thuế giàu thiệt_hại tỷ USD xuất_khẩu bảo_hộ y_tế triệu triệu_đồng tiêu_dùng hàng_hoá giảm giảm_giá vốn đồng");
category.addData("thể thao", "triệu tập ngôi sao tập luyện luyện tập Ronaldo siêu phẩm cầu thủ chiêu mộ câu lạc bộ trận");
category.addData("giáo dục", "học sinh cổng trường trường trường học chủ tịch hiệu trưởng đại học THPT THCS tốt nghiệp điểm thi thi thử môn lãnh đạo xử lý trách nhiệm");
category.addData("kinh doanh", "thu giữ xử lý bảo hiểm thị trường tập đoàn thuế giàu thiệt hại tỷ USD xuất khẩu bảo hộ y tế triệu triệu đồng tiêu dùng hàng hoá giảm giảm giá vốn đồng");

var News = category.classify('Người tiêu dùng Mỹ và Trung Quốc quay lưng với hàng hóa đối phương');
console.log("It is: " + News);
// console.log(typeof News);

