var WhichX = require("whichx");

var whichpet = new WhichX();
var labels = ["cat", "dog", "fish", "horse", "bird"];

whichpet.addLabels(labels);
// console.log('labels: ', labels);
// console.log('labels: ', typeof labels);
whichpet.addLabels("pokemon");
// console.log('labels: ', labels);

whichpet.addData("cat", "vang meo meo_meo 4_chan");
whichpet.addData("dog", "gau gau_gau 4_chan trung_thanh");
whichpet.addData("fish", "biet_boi nuoc bien");
whichpet.addData("horse", "chay_nhanh chay cao duoi_dai");
whichpet.addData("bird", "biet_bay tren_cay cay mo_nhon");

// console.log('labels: ', labels);
var pet = whichpet.classify("biet_bay cay 4_chan gau");
console.log("It is: " + pet);

