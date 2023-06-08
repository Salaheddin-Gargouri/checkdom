var btnplus = document.querySelectorAll(".plus");

function inc(event) {
  var cible = event.target;
  var paradiv = cible.parentElement;
  var para = Number(paradiv.querySelector("p").innerHTML);
  para++;
  paradiv.querySelector("p").innerHTML = para;
  var tr = paradiv.parentElement.parentElement;
  var unitprice = Number(tr.querySelector(".unitPrice").innerHTML);
  var price = tr.querySelector(".price").innerHTML;
  price = unitprice * para;
  tr.querySelector(".price").innerHTML = price;
  total();
}

for (let i = 0; i < btnplus.length; i++) {
  btnplus[i].addEventListener("click", inc);
}

var btnminus = document.querySelectorAll(".minus");

function dec(event) {
  var cible = event.target;
  var paradiv = cible.parentElement;
  var para = Number(paradiv.querySelector("p").innerHTML);
  para--;
  if (para < 0) {
    para = 0;
  }
  paradiv.querySelector("p").innerHTML = para;
  var tr = paradiv.parentElement.parentElement;
  var unitprice = Number(tr.querySelector(".unitPrice").innerHTML);
  var price = tr.querySelector(".price").innerHTML;
  price = unitprice * para;
  tr.querySelector(".price").innerHTML = price;
  total();
}

for (let i = 0; i < btnminus.length; i++) {
  btnminus[i].addEventListener("click", dec);
}
var prices = document.querySelectorAll(".price");

function total() {
  var total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += Number(prices[i].innerHTML);
    document.querySelector("#total").innerHTML = total;
  }
}

var ptndel = document.querySelectorAll(".delete");
for (let i = 0; i < ptndel.length; i++) {
  ptndel[i].addEventListener("click", del);
}
function del(event) {
  var cible = event.target;
  var tr = cible.parentElement.parentElement.parentElement.parentElement;
  tr.querySelector("p").innerHTML = 0;
  tr.querySelector(".price").innerHTML = 0;
  tr.remove();
  total();
}
var btnlike = document.querySelectorAll(".like");
for (let i = 0; i < btnlike.length; i++) {
  btnlike[i].addEventListener("click", like);
}
function like(event) {
  var cible = event.target;

  if (cible.style.color != "red") {
    cible.style.color = "red";
  } else {
    cible.style.color = "#424242";
  }
}
