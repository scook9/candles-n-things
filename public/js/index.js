const shopButtonEl = document.querySelector("#shop-button");
const homeButtonEl = document.querySelector("#home-button");
const shopFooterEl = document.querySelector("#shop-footer");
const shopAllLinkEl = document.querySelector("#shop-all");
const cartButtonEl = document.querySelector("#cart-button");
const cartFooterEl = document.querySelector("#cart-footer");

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

const displayCart = async (event) => {
  event.preventDefault();
  const response = await fetch("/cart", {
    method: "GET",
  });
  console.log("cart button works");
  if (response.ok) {
    document.location.replace("/cart");
  } else {
    alert("Shop Page failed to load");
  }
};
document.addEventListener('DOMContentLoaded', function() {
  // Your code to run when the DOM content is loaded
  var granimInstance = new Granim({
  element: "#canvas-basic",
  direction: "left-right",
  isPausedWhenNotInView: true,
  states: {
    "default-state": {
      gradients: [
        ["#fbf8cc", "#fde4cf"],
        ["#ffcfd2", "#f1c0e8"],
        ["#cfbaf0", "#a3c4f3"],
        ["#90dbf4", "#8eecf5"],
        ["#98f5e1", "#b9fbc0"],
      ],
      transitionSpeed: 7000,
    },
  },
});
  // Add your event handling logic here
});

// Header and footer links
homeButtonEl.addEventListener("click", displayHomepage);
shopButtonEl.addEventListener("click", displayShop);
shopFooterEl.addEventListener("click", displayShop);
cartButtonEl.addEventListener("click", displayCart);
cartFooterEl.addEventListener("click", displayCart);
