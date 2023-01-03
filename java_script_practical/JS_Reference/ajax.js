"use strict";
let http = new XMLHttpRequest();
console.log(http);
http.open("GET", "https://api.covid19api.com/summary", true);
http.onload = function () {
  let data = http.responseText;
  let convert = JSON.parse(data);
  console.log(convert);
  let reConvert = JSON.stringify(convert);
  console.log(reConvert);
};
http.send();
