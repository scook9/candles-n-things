
// const { Products } = require("../../models");
// const cartId = require("./shop");

// Constructor function for cart items
function Item(id) {
  this.id = id;
}

function renderCartItems() {
  const cartData = [];

  // Retrieve the cart items from local storage
  const storedCart = JSON.parse(localStorage.getItem("cartData"));

  // Check if storedCart is null or undefined
  if (storedCart) {
    // Iterate over the stored cart items
    for (let i = 0; i < storedCart.length; i++) {
      const item = storedCart[i];

      // Create a new item object using the properties from the stored cart item
      const newItem = new Item(item.id);
      cartData.push(newItem);
    }
  }

  // Compile the Handlebars template
  const templateSource = document.getElementById("cart-template").innerHTML;
  const template = Handlebars.compile(templateSource);

  // Pass the cart items to the template and generate the HTML
  const renderedHtml = template({ cartItems: cartData });

  // Insert the rendered HTML into the cart container element
  const cartContainer = document.getElementById("cartContainer");
  cartContainer.innerHTML = renderedHtml;
}

renderCartItems();

  // // Function to retrieve cart data from local storage and render cart items
  // function renderCartItems() {
  //   const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
  //   const cartContainer = document.getElementById("cartContainer");
  
  //   cartContainer.innerHTML = "";
  
  //   cartData.forEach(function (item) {
  //     const cartItem = document.createElement("div");
  //     cartItem.classList.add("cart-item");
  //     cartItem.innerHTML = `
  //       <h3>${item.name}</h3>
  //       <p>$${item.price}</p>
  //     `;
  //     cartContainer.appendChild(cartItem);
  //   });
  // }

  
  // // Call the renderCartItems function to display the cart items on page load

  
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
  //     return createCart.reduce((total, item) => total + item.price * item.count, 0);
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

