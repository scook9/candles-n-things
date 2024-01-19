//import { Products } from "../../models";

console.log("cart.js ran");
const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
console.log(cartData);

// Function to retrieve cart data from local storage and render cart items

//need to get array of ids from local storage
//pass each id in a for loop to the api GET route by :id
//Products.findByPk(:id) and add to array
//array.map((productList) => productList.get({ plain: true }))
// Retrieve the cart items from local storage
// const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
// console.log(cartData);

const renderCartItems = async () => {
  const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
  //console.log(cartData); //array of objects, each item id at cartData.cartId
  const cartContainer = document.getElementById("cartContainer");
  let cartItems = [];
  let item;
  //console.log(cartData[1].cartId);

  for (let i = 0; i < cartData.length; i++) {
    let id = cartData[i].cartId;
    //console.log(id);
    item = await fetch("/cart/" + id, {
      method: "GET",
    });
    //console.log(item.body);
    cartItems.push(item);
  }
  // const useableItems = cartItems.map((products) =>
  //   products.get({ plain: true })
  // );
  // console.log(useableItems);

  // cartContainer.innerHTML = "";

  // cartData.forEach(function (item) {
  //   const cartItem = document.createElement("div");
  //   cartItem.classList.add("cart-item");
  //   cartItem.innerHTML = `
  //       <h3>${item.name}</h3>
  //       <p>$${item.price}</p>
  //     `;
  //   cartContainer.appendChild(cartItem);
  // });
};

// Call the renderCartItems function to display the cart items on page load
renderCartItems();
