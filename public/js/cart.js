
const { Products } = require("../../models");
const cartId = require("./shop");


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
  const myCart = (function () {
    let createCart = [];
  
    function getCart() {
      const storedCart = localStorage.getItem("myCart");
      if (storedCart) {
        createCart = JSON.parse(storedCart);
      }
    }
  
    function saveCart() {
      localStorage.setItem("myCart", JSON.stringify(createCart));
    }
  
    const cart = {};
  
    cart.addItemToCart = function (name, price, count) {
      for (let item of createCart) {
        if (item.name === name) {
          item.count++;
          saveCart();
          return;
        }
      }
      const newItem = new Item(name, price, count);
      createCart.push(newItem);
      saveCart();
    };
  
    cart.setCountForItem = function (name, count) {
      for (let item of createCart) {
        if (item.name === name) {
          item.count = count;
          break;
        }
      }
    };
  
    cart.totalCart = function () {
      return createCart.reduce((total, item) => total + item.price * item.count, 0);
    };
  
    cart.listCart = function () {
      return createCart.map((item) => {
        const itemCopy = { ...item };
        itemCopy.total = (item.price * item.count).toFixed(2);
        return itemCopy;
      });
    };
  
    cart.removeItemFromCart = function (name) {
      for (let i = 0; i < createCart.length; i++) {
        if (createCart[i].name === name) {
          createCart[i].count--;
          if (createCart[i].count === 0) {
            createCart.splice(i, 1);
          }
          break;
        }
      }
      saveCart();
    };
  
    getCart();
  
    return cart;
  })();
  
  module.exports = myCart;












// const myCart = (function () {
//   createCart = [];

//   function getCart() {
//     createCart = JSON.parse(localStorage.getItem("myCart"));
//   }

//   function saveCart() {
//     localStorage.setItem("myCart", JSON.stringify(createCart));
//   }

// var cart = {};
// cart.addItemToCart = function (name, price, count) {
//     for (var item in createCart) {
//         if (createCart[item].name === name) {
//             createCart[item].count++;
//             saveCart();
//         return;
//         }
//     }
//     var item = new Item(name, price, count);
//     createCart.push(item);
//     saveCart();
// };

// cart.setCountForItem = function (name, count) {
//     for (var i in createCart) {
//         if (createCart[i].name === name) {
//         createCart[i].count = count;
//         break;
//         }
//     }
// };

// cart.totalCart = function () {
//     var totalCart = 0;
//     for (var item in createCart) {
//       totalCart += createCart[item].price * createCart[item].count;
//     }
//     return Number(totalCart.toFixed(2));
// };

// cart.listCart = function () {
//     var cartCopy = [];
//     for (i in createCart) {
//         item = createCart[i];
//         itemCopy = {};
//     for (p in item) {
//         itemCopy[p] = item[p];
//     }
//         itemCopy.total = Number(item.price * item.count).toFixed(2);
//         cartCopy.push(itemCopy);
//     }
//     return cartCopy;
// };
// return cart;
// })
// //execute 'myCart' function






// //need to attach to buttons on the cart page to remove a single item
// cart.removeItemFromCart = function (name) {
//     for (var item in createCart) {
//       if (createCart[item].name === name) {
//         createCart[item].count--;
//         if (createCart[item].count === 0) {
//           createCart.splice(item, 1);
//         }
//         break;
//       }
//     }
//     saveCart();
//   };




// //need to attach to buttons on the cart page to remove all items
// function clearCart() {
//     createCart = [];
//     saveCart();
// };



// //need to add   id="add-to-cart-btn"  to the buttons on the cards on the shop
// document.getElementById("add-to-cart-btn").addEventListener("click", function() {
//     myCart.addItemToCart("Product A", 10, 1);
//   });
  
