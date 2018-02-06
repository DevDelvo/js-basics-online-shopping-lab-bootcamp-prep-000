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
  
  if (clength === 0) {
    return "Your shopping cart is empty.";
  } else if (clength === 1) {
    view += `${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]}.`;
  } else if (clength === 2) {
    view += `${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]} and ${Object.keys(cart[1])[0]} at $${Object.values(cart[1])[0]}`; 
  }
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
