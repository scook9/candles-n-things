console.log("hit cart.js file");

//pseudo code
//need array of all ids in cart, cartIds
//need to hit fetch by id route for each id in cartIds

// //need to get array of ids from local storage
// //pass each id in a for loop to the api GET route by :id
// //Products.findByPk(:id) and add to array
// //array.map((productList) => productList.get({ plain: true }))

// let storedIds = [];
// for (i in localStorage.key) {
//   storedIds.push(localStorage.key[i]);
// }
// console.log(storedIds);
// // for (id in storedIds) {
// //   let item = await fetch
// // }

// Constructor function for cart items
function Item(id, price, count) {
  this.scent = id;
  this.price = price;
  this.count = count;
}

// Function to retrieve cart data from local storage and render cart items
function renderCartItems() {
  const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
  const cartContainer = document.getElementById("cartContainer");
  console.log("renderCartItems function hit");
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

// Object to encapsulate cart functionality
// const myCart = (function () {
//   let createCart = [];

//   function getCart() {
//     const storedCart = localStorage.getItem("myCart");
//     if (storedCart) {
//       createCart = JSON.parse(storedCart);
//     }
//   }

//   function saveCart() {
//     localStorage.setItem("myCart", JSON.stringify(createCart));
//   }

//   const cart = {};

//   cart.addItemToCart = function (name, price, count) {
//     for (let item of createCart) {
//       if (item.name === name) {
//         item.count++;
//         saveCart();
//         return;
//       }
//     }
//     const newItem = new Item(name, price, count);
//     createCart.push(newItem);
//     saveCart();
//   };

//   cart.setCountForItem = function (name, count) {
//     for (let item of createCart) {
//       if (item.name === name) {
//         item.count = count;
//         break;
//       }
//     }
//   };

//   cart.totalCart = function () {
//     return createCart.reduce(
//       (total, item) => total + item.price * item.count,
//       0
//     );
//   };

//   cart.listCart = function () {
//     return createCart.map((item) => {
//       const itemCopy = { ...item };
//       itemCopy.total = (item.price * item.count).toFixed(2);
//       return itemCopy;
//     });
//   };

//   cart.removeItemFromCart = function (name) {
//     for (let i = 0; i < createCart.length; i++) {
//       if (createCart[i].name === name) {
//         createCart[i].count--;
//         if (createCart[i].count === 0) {
//           createCart.splice(i, 1);
//         }
//         break;
//       }
//     }
//     saveCart();
//   };

//   getCart();

//   return cart;
// })();

// module.exports = myCart;
