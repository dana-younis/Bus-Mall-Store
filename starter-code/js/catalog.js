/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
let cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  let selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let firstOpt = document.createElement('option');
    firstOpt.value = Product.allProducts[i].name;
    firstOpt.textContent = Product.allProducts[i].name;
    selectElement.appendChild(firstOpt);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart(event);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  let selectedItem = document.getElementById('items').value;

  let desiredQuantity = document.getElementById('quantity').value;

  cart.addItem(selectedItem, desiredQuantity)
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
let count=0;
function updateCounter() {
  count += parseInt(document.getElementById('quantity').value);
  let countOne = document.getElementById('itemCount');
  countOne.textContent = `    your total count is ${count}`;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartCon///tents div with that information
  let previewList = document.getElementById('cartContents');

  let list = document.createElement('li');
  list.textContent = `${document.getElementById('items').value}: ${document.getElementById('quantity').value}`;
  previewList.appendChild(list);
   
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
let catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
