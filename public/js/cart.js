const { Products } = require("../../models");
const cartId = require("./shop");

//need to connect event listener to an "add to cart" button on each card
const myCart = function () {
  let createCart = [];
  function Item(scent, price, count) {
    this.scent = scent;
    this.price = price;
    this.count = count;
  }

  function getCart() {
    createCart = JSON.parse(localStorage.getItem("myCart"));
  }

  function saveCart() {
    localStorage.setItem("myCart", JSON.stringify(createCart));
  }

  var cart = {};
  cart.addItemToCart = function (name, price, count) {
    for (var item in createCart) {
      if (createCart[item].name === name) {
        createCart[item].count++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    createCart.push(item);
    saveCart();
  };

  cart.setCountForItem = function (name, count) {
    for (var i in createCart) {
      if (createCart[i].name === name) {
        createCart[i].count = count;
        break;
      }
    }
  };

  cart.totalCart = function () {
    var totalCart = 0;
    for (var item in createCart) {
      totalCart += createCart[item].price * createCart[item].count;
    }
    return Number(totalCart.toFixed(2));
  };

  cart.listCart = function () {
    var cartCopy = [];
    for (i in createCart) {
      item = createCart[i];
      itemCopy = {};
      for (p in item) {
        itemCopy[p] = item[p];
      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy);
    }
    return cartCopy;
  };
  return cart;
};
//execute 'myCart' function
myCart();

//need to attach to buttons on the cart page to remove a single item
cart.removeItemFromCart = function (name) {
  for (var item in createCart) {
    if (createCart[item].name === name) {
      createCart[item].count--;
      if (createCart[item].count === 0) {
        createCart.splice(item, 1);
      }
      break;
    }
  }
  saveCart();
};

//need to attach to buttons on the cart page to remove all items
function clearCart() {
  createCart = [];
  saveCart();
}

//need to add   id="add-to-cart-btn"  to the buttons on the cards on the shop
document
  .getElementById("add-to-cart-btn")
  .addEventListener("click", function () {
    myCart.addItemToCart("Product A", 10, 1);
  });
