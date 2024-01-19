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

// var granimInstance = new Granim({
//   element: "#canvas-basic",
//   direction: "left-right",
//   isPausedWhenNotInView: true,
//   states: {
//     "default-state": {
//       gradients: [
//         ["#fbf8cc", "#fde4cf"],
//         ["#ffcfd2", "#f1c0e8"],
//         ["#cfbaf0", "#a3c4f3"],
//         ["#90dbf4", "#8eecf5"],
//         ["#98f5e1", "#b9fbc0"],
//       ],
//       transitionSpeed: 7000,
//     },
//   },
// });

// Header and footer links
homeButtonEl.addEventListener("click", displayHomepage);
shopButtonEl.addEventListener("click", displayShop);
shopFooterEl.addEventListener("click", displayShop);

// Homepage body links
// shopAllLinkEl.addEventListener("click", displayShop);
// shopSoapLinkEl.addEventListener("click", displayShopSoap);
