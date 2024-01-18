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

const displayEl = document.getElementsByClassName("displayCart");

const cartAdd = document.querySelector("#cartAdd");

const buttonListEl = document.querySelector(".products");

let cartId;
// Event listeners

showAll.addEventListener("click", showAllFunc);
showCandles.addEventListener("click", showCandlesFunc);
showSoaps.addEventListener("click", showSoapsFunc);
showScrubs.addEventListener("click", showScrubsFunc);

buttonListEl.addEventListener("click", function (event) {
  // get letter from clicked letter button's `data-letter` attribute and use it for display
  // console.log($(event.target).attr("data-id"));
  cartId = $(event.target).attr("data-id");
  const productName = $(event.target).attr("data-name");
  const productPrice = $(event.target).attr("data-price");
  addToCart(productId, productName, productPrice);
  });

  // console.log(event.target);
  console.log(cartId);


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

module.exports = cartId;