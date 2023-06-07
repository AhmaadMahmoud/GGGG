let dollar = document.getElementById("dollar");
let pound = document.getElementById("pound");

dollar.onkeyup = function () {
  console.log(dollar.value);
  pound.value = dollar.value * 30.89;
};

pound.onkeyup = function () {
  console.log(pound.value);
  dollar.value = pound.value / 30.89;
};
 //---------------------------------------------

 let ryal = document.getElementById("ryal");
let LE = document.getElementById("LE");

 ryal.onkeyup = function () {
   console.log(ryal.value);
   LE.value = ryal.value * 8.24;
 };

 LE.onkeyup = function () {
   console.log(LE.value);
   ryal.value = LE.value / 8.24;
 };

//  ----------------------------------------
 let euro = document.getElementById("euro");
 let masr = document.getElementById("masr");

 euro.onkeyup = function () {
   console.log(euro.value);
   masr.value = euro.value * 33.12;
 };

 masr.onkeyup = function () {
   console.log(masr.value);
   euro.value = masr.value / 33.12;
 };