// variable declorations

const showAll = document.getElementById("showAll");
const showCandles = document.getElementById("showCandles");
const showSoaps = document.getElementById("showSoaps");
const candles = document.getElementsByClassName("candle");
const soaps = document.getElementsByClassName("soap");
const candleHeader = document.getElementById("candleHeader");
const soapHeader = document.getElementById("soapHeader");
const candleDisclaimer = document.getElementById("candleDisclaimer");
const soapDisclaimer = document.getElementById("soapDisclaimer");

// Event listeners

showAll.addEventListener("click", showAllFunc);
showCandles.addEventListener("click", showCandlesFunc);
showSoaps.addEventListener("click", showSoapsFunc);

function showAllFunc() {
  console.log("reached show all function");

  candleHeader.classList.add("hide");
  soapHeader.classList.add("hide");
  candleDisclaimer.classList.add("hide");
  soapDisclaimer.classList.add("hide");

  for (let i = 0; i < candles.length; i++) {
    candles[i].classList.remove("hide");
  }
  for (let i = 0; i < candles.length; i++) {
    soaps[i].classList.remove("hide");
  }
}

function showCandlesFunc() {
  console.log("reached show all Candles function");

  candleHeader.classList.remove("hide");
  soapHeader.classList.add("hide");
  candleDisclaimer.classList.remove("hide");
  soapDisclaimer.classList.add("hide");

  for (let i = 0; i < candles.length; i++) {
    candles[i].classList.remove("hide");
  }
  for (let i = 0; i < candles.length; i++) {
    soaps[i].classList.add("hide");
  }
}

function showSoapsFunc() {
  console.log("reached show all Soaps function");

  candleHeader.classList.add("hide");
  soapHeader.classList.remove("hide");
  candleDisclaimer.classList.add("hide");
  soapDisclaimer.classList.remove("hide");

  for (let i = 0; i < candles.length; i++) {
    candles[i].classList.add("hide");
  }
  for (let i = 0; i < candles.length; i++) {
    soaps[i].classList.remove("hide");
  }
}
