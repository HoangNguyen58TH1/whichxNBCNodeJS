var array = [
  {
    url: '/huu-phuoc-20200610151525214.htm'
  },
  {
    url: '/nguoi-bo-roi-be-so-sinh-duoi-ho-ga-o-ha-noi-chinh-la-me-de-be-20200610134835741.htm'
  },
  {
    url: '/20-bi-cao-tham-gia-duong-day-khung-bo-hau-toa-20200610143857342.htm'
  },
  {
    url: '/vo-chong-ho-cung-linh-an-vi-toi-giet-nguoi-20200610142048382.htm'
  },
  {
    url: '/khong-che-ke-ngao-da-cam-dao-om-bat-huong-co-thu-trong-nha-dan-20200610110754829.htm'
  },
  {
    url: '/khoi-to-vu-hon-chien-lam-mot-nguoi-chet-o-thai-binh-20200610100832203.htm'
  },
  {
    url: '/be-5-tuoi-chet-o-nha-hoang-nghi-pham-khai-dua-be-di-giau-theo-game-online-20200610085056296.htm'
  },
  {
    url: '/thay-giao-dam-o-nam-sinh-bi-tam-giu-hinh-su-20200610062400175.htm'
  },
  {
    url: '/tam-giu-36-nghi-pham-vu-bang-nhom-ao-cam-nao-loan-quan-oc-binh-tan-20200609214742965.htm'
  },
  {
    url: '/trieu-tap-nam-sinh-lop-11-nghi-lien-quan-vu-be-5-tuoi-chet-trong-nha-hoang-20200609215358957.htm'
  },
  {
    url: '/to-chuc-danh-bac-va-danh-bac-63-con-bac-lanh-gan-200-nam-tu-20200609185623498.htm'
  },
  {
    url: '/gap-xe-nao-dot-xe-do-thanh-nien-thieu-trui-6-xe-hoi-dau-ven-duong-nha-trang-trong-dem-20200609185652124.htm'
  },
  {
    url: '/be-trai-5-tuoi-chet-trong-nha-hoang-hai-tay-bi-troi-20200609185549927.htm'
  },
  {
    url: '/dot-kich-quan-karaoke-test-nhanh-phat-hien-68-thanh-nien-choi-ma-tuy-20200609173509971.htm'
  },
  {
    url: '/huy-an-so-tham-cua-toa-long-an-dieu-tra-lai-tranh-lot-toi-giet-nguoi-20200609165020433.htm'
  }
]

var arrayUrl = array.map((arrayCurrent) => {
  var urlDetail = arrayCurrent.url
  var findIndexLastCharacter = urlDetail.lastIndexOf('-')
  urlDetail = urlDetail.slice(1, findIndexLastCharacter)
  console.log('url Intinial: ', urlDetail);
  console.log('----------------------');
  return urlDetail
})
console.log(arrayUrl);
// var string = arrayUrl.join('<br>')
// console.log(string);