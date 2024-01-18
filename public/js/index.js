const shopButtonEl = document.querySelector("#shop-button");

console.log("shop linked");

const homeButtonEl = document.querySelector("#home-button");

const displayHomepage = async (event) => {
    event.preventDefault();
    const response = await fetch ("/", {
        method: "GET",
    });
    console.log("home button works");
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert("Failed to Load Homepage")
    }
}

const displayShop = async (event) => {
  event.preventDefault();
  const response = await fetch ("/shop", {
    method: "GET",
  });
  console.log("shop button works");
  if (response.ok) {
    document.location.replace('/shop');
  } else {
    alert("Shop Page failed to load");
  }
};

homeButtonEl.addEventListener("click", displayHomepage);
shopButtonEl.addEventListener("click", displayShop);
