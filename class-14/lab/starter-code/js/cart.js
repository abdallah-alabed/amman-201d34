/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  for (let i = 0; i < cartItems.length; i++) {
    cart.push(new CartItem)
}

}


// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  for(let i = 2 ; i <= Cart.items.length ;i++){
table.deleteRow(i);


  }


  }


// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
for (i = 0 ; i < Cart.length ; i++){
 let trelement = document.createElement('tr');
    table.appendChild(trelement);
let clear = document.createElement('td');
    trelement.appendChild(clear);
    let name = document.createElement('td');
    trelement.appendChild(name);
    let qua= document.createElement('td');
    trelement.appendChild(qua);
    clear.textContent = "clear";
    name.textContent =  Cart.items[i].product;
    qua.textContent = Cart.items[i].quantity;
 let body = document.getElementsByTagName('tbody');
 trelement.appendChild(body);
}
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  Cart.removeItem(event.target.items.value) ;

  // TODO: Save the cart back to local storage
  Cart.saveToLocalStorage(Cart.items);
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
