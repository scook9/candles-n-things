const shopButtonEl = document.querySelector("#shop-button");
const homeButtonEl = document.querySelector("#home-button");
const shopFooterEl = document.querySelector("#shop-footer");
const shopAllLinkEl = document.querySelector("#shop-all");
const shopSoapLinkEl = document.querySelector("#shop-soap-link");

const displayHomepage = async (event) => {
  event.preventDefault();
  const response = await fetch("/", {
    method: "GET",
  });
  console.log("home button works");
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to Load Homepage");
  }
};

const displayShop = async (event) => {
  event.preventDefault();
  const response = await fetch("/shop", {
    method: "GET",
  });
  console.log("shop button works");
  if (response.ok) {
    document.location.replace("/shop");
  } else {
    alert("Shop Page failed to load");
  }
};

const displayShopSoap = async (event) => {
  event.preventDefault();
};

var granimInstance = new Granim({
  element: '#logo-canvas',
  direction: 'left-right',
  states : {
      "default-state": {
          gradients: [
              ['#532A09', '#7B4618'],
              ['#915C27', '#AD8042'],
              ['#BFAB67', '#BFC882'],
              ['#A4B75C', '#647332'],
              ['#3E4c22', '#2E401C']
          ],
          transitionSpeed: 5000
      }
  }
});

// Header and footer links
homeButtonEl.addEventListener("click", displayHomepage);
shopButtonEl.addEventListener("click", displayShop);
shopFooterEl.addEventListener("click", displayShop);

// Homepage body links
// shopAllLinkEl.addEventListener("click", displayShop);
// shopSoapLinkEl.addEventListener("click", displayShopSoap);
