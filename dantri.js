const puppeteer = require('puppeteer');
var WhichX = require("whichx");
module.exports = (async() => {
    // Mở trình duyệt mới và tới trang của kenh14
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    // await page.goto('https://tuoitre.vn/phap-luat.htm', {waitUntil: 'load', timeout: 0});
    // await page.goto('https://tuoitre.vn/kinh-doanh.htm', {waitUntil: 'load', timeout: 0});
    await page.goto('https://congnghe.tuoitre.vn/', {waitUntil: 'load', timeout: 0});
    // await page.goto('https://tuoitre.vn/xe.htm', {waitUntil: 'load', timeout: 0});
    // await page.goto('https://thethao.tuoitre.vn/', {waitUntil: 'load', timeout: 0});
    // await page.goto('https://tuoitre.vn/giao-duc.htm', {waitUntil: 'load', timeout: 0});
    // await page.goto('https://tuoitre.vn/suc-khoe.htm', {waitUntil: 'load', timeout: 0});


    // Chạy đoạn JavaScript trong hàm này, đưa kết quả vào biến article
    const articles = await page.evaluate(() => {
        //thethao
        // let titleLinks = document.querySelectorAll('ul.listnews > li.news-item > div.txt > h3 > a');

        //phapluat, congnghe, xe, giaoduc, kinhdoanh, suckhoe
        let titleLinks = document.querySelectorAll('ul.list-news-content > li.news-item > div.name-news > h3.title-news > a');
        titleLinks = [...titleLinks];
        let articles = titleLinks.map(link => ({
            tentintuc: link.getAttribute('title'),
            // url: link.getAttribute('href'),
        }));
        return articles;
    });

    // In ra kết quả và đóng trình duyệt
    // console.log(articles);
    await browser.close();

    //whichx
    var category = new WhichX();
    var labels = ["pháp luật", "kinh doanh", "công nghệ", "xe", "thể thao", "giáo dục", "sức khoẻ"];

    category.addLabels(labels);
    category.addData("pháp luật", "khởi tố bị can vụ án bắt nghi phạm trộm bị cáo tù hầu toà đình chỉ công an xác minh vận chuyển ma tuý hối lộ đình công vay nặng lãi trái phép trốn thuế quả tang thiếu uý nạn nhân hồ sơ chiếm đoạt bồi thường quản lý năm tù chém nghi phạm oan hoãn xử");
    category.addData("kinh doanh", "dự án công ty vang mua thu giữ xử lý bảo hiểm thị trường tập đoàn thuế giàu thiệt hại tỷ USD xuất khẩu bảo hộ y tế triệu triệu đồng tiêu dùng hàng hoá giảm giá vốn đồng cầu đầu tư");
    category.addData("công nghệ", "facebook thông tin cá nhân trải nghiệm robot hiện đại cáp quang AGG mạng viễn thông sim điện thoại app hack huawei trực tuyến mã nguồn mở mạng xã hội twitter tweet tv khoa học công nghệ mới sáng tạo số hoá samsung iphone apple chip 5g 4g internet máy tính trí tuệ nhân tạo game điện toán đám mây karaoke airpods oneplus plus camera điện tử ứng dụng qualcomm cisco viettel global zoom ai online startup bphoen tiktok instagram di dộng realme dùng riêng tư chất lượng âm thanh TV ");
    category.addData("xe", "oto ôtô nhập cảnh xe lexus trốn thuế taxi phá sản chạy toyota hãng thị trường Camry Innova Corolla doanh số tụt dốc vinfast kiểm định tải khách con máy chổ cao tốc sản xuất đại lý");
    category.addData("thể thao", "triệu tập ngôi sao tập luyện tập Ronaldo siêu phẩm cầu thủ chiêu mộ câu lạc bộ trận chấn thương VFF AFF tuyển world cup thái cực quyền c.ronaldo sao trẻ utd messi Văn Lâm dứt điểm dẫn dắt muller bayern munich hlv giải rách cơ đùi đấu võ sĩ đồng đội cđv liverpool atletico ngoại binh fc môn đối");
    category.addData("giáo dục", "học sinh cổng trường hiệu trưởng đại học THPT THCS tốt nghiệp điểm thi môn lãnh đạo xử lý trách nhiệm phụ huynh bằng khen thầy cô giáo trẻ đh học phí bạ tuyển lớp giảng viên tốt nghiệp");
    category.addData("sức khoẻ", "covid covid19 covid-19 vũ hán nhiễm virus corona qua đời giám đốc bệnh viện trẻ em phụ nữ mang thai dịch thuốc bệnh nhân nguy cơ giảm âm tính dương tính thuốc lá hại who cảnh báo kháng sinh chữa tiến triễn thăm phổi tổn thương xuất viện");

    var idtheloai;
    const articlesArray = [];
    for (let i = 0; i < articles.length; i++) {
      var News = category.classify(articles[i].tentintuc);
      console.log(articles[i].tentintuc);
      console.log("It is: " + i + " " + News);

      //set idtheloai
      switch(News){
        case 'pháp luật':
            idtheloai = 1;//10/15 66,7%
            break;
        case 'kinh doanh':
            idtheloai = 2;//4/17 24%
            break;
        case 'công nghệ':
            idtheloai = 3;//9/20 45% - 12/20 60%
            break;
        case 'xe':
            idtheloai = 4;//12/15 80%
            break;
        case 'thể thao':
            idtheloai = 5;//5/15 33,3% - 8/15 53%
            break;
        case 'giáo dục':
            idtheloai = 6;//4/15 27% - 11/15 73%
            break;
        case 'sức khoẻ':
            idtheloai = 7;//12/15 80%
            break;
        default:
            console.log('chet con me m deeeeeeeeeeee');
      }
      console.log('idtheloai: ', idtheloai);

      var articlesOject = {
          tentintuc: articles[i].tentintuc,
          idtheloai: idtheloai
      }
      articlesArray.push(articlesOject)
    }

    console.log('test: ', articlesArray);

    return articlesArray;
});

// module.exports = test;
