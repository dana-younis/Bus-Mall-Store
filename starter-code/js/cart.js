/* global Cart */
'use strict';
var tBody = document.getElementsByTagName('tbody')[0];

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
let table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;
let dumpItem;
function loadCart() {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {

  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  tBody.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart


function showCart() {

  for(var i = 0; i < cart.items.length; i++){
    var newRow = addElement('tr', tBody);
    addElement('td', newRow, 'x', i);
    addElement('td', newRow, cart.items[i].quantity);
    addElement('td', newRow, cart.items[i].product);

  }
}
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR


// dumpItem.onclick = function () {
//   removeItemFromCart()
// }
function addElement(element, parent, value, ){

  var newElement = document.createElement(element);
  newElement.textContent = value;

 

  parent.appendChild(newElement);

  return newElement;
}
function removeItemFromCart(event) {

  event.preventDefault();

  if (event.target.textContent === 'x') {
    cart.items.splice(event.target.id, 1);

  }

  cart.saveToLocalStorage();
  renderCart();
console.log(cart);



  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();