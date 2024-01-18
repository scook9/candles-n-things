const shopButtonEl = document.querySelector("#shop-button");
const homeButtonEl = document.querySelector("#home-button");
const shopFooterEl = document.querySelector("#shop-footer");
const shopAllLinkEl = document.querySelector("#shop-all");

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

//header and footer links
homeButtonEl.addEventListener("click", displayHomepage);
shopButtonEl.addEventListener("click", displayShop);
shopFooterEl.addEventListener("click", displayShop);

//homepage body links
shopAllLinkEl.addEventListener("click", displayShop);
