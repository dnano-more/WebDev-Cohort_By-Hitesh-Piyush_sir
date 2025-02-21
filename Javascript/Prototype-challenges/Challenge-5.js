/*
Problem statement
Create a Shopping Cart system where items can be added with a price. Implement a method getTotalPrice() that calculates the total price of all items in the cart.

Challenge
Implement a constructor function ShoppingCart that initializes an empty items array.
Attach addItem(price) to the prototype to add items.
Attach getTotalPrice() to calculate the total price of items.

Hint 1
Use .reduce((acc, price) => acc + price, 0); in getTotalPrice().
*/

function ShoppingCart() {
    // Initialize items property
    this.items = [];
}

// Define addItem method on ShoppingCart's prototype
ShoppingCart.prototype.addItem = function (price) {
    this.items.push(price);
}

// Define getTotalPrice method on ShoppingCart's prototype
ShoppingCart.prototype.getTotalPrice = function () {
    return this.items.reduce((acc, price) => acc + price, 0);
}

// Test code
const cart = new ShoppingCart();
// cart.addItem(10);
// cart.addItem(20);
// cart.addItem(30);
// console.log(cart.getTotalPrice()); // Expected output: 60

cart.addItem(5);
cart.addItem(15);
cart.addItem(25);
cart.addItem(10);
console.log(cart.getTotalPrice()); // Expected output: 55

// cart.addItem(100);
// console.log(cart.getTotalPrice()); // Expected output: 100
