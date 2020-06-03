const puppeteer = require('puppeteer');
var WhichX = require("whichx");

(async() => {
    // Mở trình duyệt mới và tới trang của kenh14
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://tuoitre.vn/giao-duc.htm', {waitUntil: 'load', timeout: 0});

    // Chạy đoạn JavaScript trong hàm này, đưa kết quả vào biến article
    const articles = await page.evaluate(() => {
        // let titleLinks = document.querySelectorAll('div.mt3.clearfix > a');
        // let titleLinks = document.querySelectorAll('ul.listnews > li.news-item > div.txt > h3 > a');
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
    var labels = ["thể thao", "giáo dục", "kinh doanh"];

    category.addLabels(labels);
    category.addData("thể thao", "triệu tập ngôi sao tập luyện tập Ronaldo siêu phẩm cầu thủ chiêu mộ câu lạc bộ trận chấn thương VFF AFF tuyển world cup thái cực quyền đấm c.ronaldo sao trẻ man utd messi Văn Lâm dứt điểm dẫn dắt");
    category.addData("giáo dục", "học sinh cổng trường trường trường học chủ tịch hiệu trưởng đại học THPT THCS tốt nghiệp điểm thi thi thử môn lãnh đạo xử lý trách nhiệm phụ huynh bằng khen cấp trên");
    category.addData("kinh doanh", "thu giữ xử lý bảo hiểm thị trường tập đoàn thuế giàu thiệt hại tỷ USD xuất khẩu bảo hộ y tế triệu triệu đồng tiêu dùng hàng hoá giảm giảm giá vốn đồng công ty thủ tướng doanh nghiệp đầu tư suy thoái sòng bài quản lý hoạt động kinh doanh dịch vụ mua bán giá");

    var idtheloai;
    var articlesArray = [];
    for (let i = 0; i < articles.length; i++) {
      var News = category.classify(articles[i].tentintuc);
      console.log(articles[i].tentintuc);
      console.log("It is: " + i + " " + News);

      if (News == 'thể thao') {
        idtheloai = 1
      } else if(News == 'giáo dục'){
          idtheloai = 2
      } else if(News == 'kinh doanh'){
          idtheloai = 3
      }
      console.log('idtheloai: ', idtheloai);

      var articlesObject = {
          tentintuc: articles[i].tentintuc,
          idtheloai: idtheloai
      }
    //   console.log('articlesObject: ', articlesObject);
    //   articlesArray = Object.assign(articlesArray, articlesObject);
    articlesArray.push(articlesObject)

    }
    console.log('test: ', articlesArray);
    console.log(typeof articlesArray);
    // console.log('test: ', articles);
    // console.log(typeof articles);
    // console.log(typeof idtheloai);


})();

// module.exports = articles;
