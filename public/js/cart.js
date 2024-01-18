const { Products } = require("../../models");

//need to connect event listener to an add to cart button and a clear cart button


const myCart = (function () {
  createCart = [];
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

  function clearCart() {
    if (sessionStorage.getItem("myCart")) {
      sessionStorage.removeItem("myCart");
      saveCart();
    }
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
})

();
