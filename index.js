var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100);
  cart.push({ [item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  const clength = cart.length;
  var view = "In your cart, you have ";
  
  if (!clength) {
    return "Your shopping cart is empty.";
  } else if (clength === 1) {
    view += `${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]}.`;
  } else if (clength === 2) {
    view += `${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]} and ${Object.keys(cart[1])[0]} at $${Object.values(cart[1])[0]}.`; 
  } else {
      for (var i = 0; i < clength; i++) {
        var index = cart[i];
        var item = Object.keys(index)[0];
        var price = Object.values(index)[0];
        
        if (i === clength - 1) {
          view += `and ${item} at $${price}.`;
        } else {
          view += `${item} at $${price}, `;
        }
      }
  }
  return view;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
