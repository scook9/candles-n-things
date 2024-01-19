
const { Products } = require("../../models");




// Function to retrieve cart data from local storage and render cart items
function renderCartItems() {
  const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
  const cartContainer = document.getElementById("cartContainer");

  cartContainer.innerHTML = "";

  cartData.forEach(function (item) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
      `;
    cartContainer.appendChild(cartItem);
  });
}

// Call the renderCartItems function to display the cart items on page load
renderCartItems();

