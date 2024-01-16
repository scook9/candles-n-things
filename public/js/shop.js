// variable declorations

const showAll = document.getElementById("showAll");
const showCandles = document.getElementById("showCandles");
const showSoaps = document.getElementById("showSoaps");
const showScrubs = document.getElementById("showScrubs");
const candles = document.getElementsByClassName("candle");
const soaps = document.getElementsByClassName("soap");
const scrubs = document.getElementsByClassName("scrub");
const candleHeader = document.getElementById("candleHeader");
const soapHeader = document.getElementById("soapHeader");
const scrubHeader = document.getElementById("scrubHeader");
const candleDisclaimer = document.getElementById("candleDisclaimer");
const soapDisclaimer = document.getElementById("soapDisclaimer");

// Event listeners

showAll.addEventListener("click", showAllFunc);
showCandles.addEventListener("click", showCandlesFunc);
showSoaps.addEventListener("click", showSoapsFunc);
showScrubs.addEventListener("click", showScrubsFunc);

// function to show all products. removes hide class from all descriptions and disclaimers, then removes hide from all products

function showAllFunc() {
  console.log("reached show all function");

  candleHeader.classList.add("hide");
  soapHeader.classList.add("hide");
  scrubHeader.classList.add("hide");
  candleDisclaimer.classList.add("hide");
  soapDisclaimer.classList.add("hide");

  for (let i = 0; i < candles.length; i++) {
    candles[i].classList.remove("hide");
  }
  for (let i = 0; i < soaps.length; i++) {
    soaps[i].classList.remove("hide");
  }
  for (let i = 0; i < scrubs.length; i++) {
    scrubs[i].classList.remove("hide");
  }
}

// function to remove hide from all candles and the candles description/disclaimer. Adds hide class to everything else

function showCandlesFunc() {
  console.log("reached show all Candles function");

  candleHeader.classList.remove("hide");
  soapHeader.classList.add("hide");
  scrubHeader.classList.add("hide");
  candleDisclaimer.classList.remove("hide");
  soapDisclaimer.classList.add("hide");

  for (let i = 0; i < candles.length; i++) {
    candles[i].classList.remove("hide");
  }
  for (let i = 0; i < soaps.length; i++) {
    soaps[i].classList.add("hide");
  }
  for (let i = 0; i < scrubs.length; i++) {
    scrubs[i].classList.add("hide");
  }
}

// function to remove hide from all soaps and the soaps description/disclaimer. Adds hide class to everything else

function showSoapsFunc() {
  console.log("reached show all Soaps function");

  candleHeader.classList.add("hide");
  soapHeader.classList.remove("hide");
  scrubHeader.classList.add("hide");
  candleDisclaimer.classList.add("hide");
  soapDisclaimer.classList.remove("hide");

  for (let i = 0; i < candles.length; i++) {
    candles[i].classList.add("hide");
  }
  for (let i = 0; i < soaps.length; i++) {
    soaps[i].classList.remove("hide");
  }
  for (let i = 0; i < scrubs.length; i++) {
    scrubs[i].classList.add("hide");
  }
}

// function to remove hide from all scrubs and the scrubs description. Adds hide class to everything else

function showScrubsFunc() {
  console.log("reached show all Scrubs function");

  candleHeader.classList.add("hide");
  soapHeader.classList.add("hide");
  scrubHeader.classList.remove("hide");
  candleDisclaimer.classList.add("hide");
  soapDisclaimer.classList.add("hide");

  for (let i = 0; i < candles.length; i++) {
    candles[i].classList.add("hide");
  }
  for (let i = 0; i < soaps.length; i++) {
    soaps[i].classList.add("hide");
  }
  for (let i = 0; i < scrubs.length; i++) {
    scrubs[i].classList.remove("hide");
  }
}
