const showAll = document.getElementById("showAll");
const showCandles = document.getElementById("showCandles");
const showSoaps = document.getElementById("showSoaps");
const candles = document.getElementsByClassName("candle");
const soaps = document.getElementsByClassName("soap");

showAll.addEventListener("click", showAllFunc);
showCandles.addEventListener("click", showCandlesFunc);
showSoaps.addEventListener("click", showSoapsFunc);

function showAllFunc() {
  console.log("reached show all function");
  for (let i = 0; i < candles.length; i++) {
    candles[i].classList.remove("hide");
  }
  for (let i = 0; i < candles.length; i++) {
    soaps[i].classList.remove("hide");
  }
}

function showCandlesFunc() {
  console.log("reached show all Candles function");
  for (let i = 0; i < candles.length; i++) {
    candles[i].classList.remove("hide");
  }
  for (let i = 0; i < candles.length; i++) {
    soaps[i].classList.add("hide");
  }
}

function showSoapsFunc() {
  console.log("reached show all Soaps function");
  for (let i = 0; i < candles.length; i++) {
    candles[i].classList.add("hide");
  }
  for (let i = 0; i < candles.length; i++) {
    soaps[i].classList.remove("hide");
  }
}
