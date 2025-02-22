/*
Problem statement

You are developing an online store system where each product has the following properties:

   • name: The name of the product (e.g., "Laptop").
   • price: The price of the product (a positive integer).
   • stock: The available stock (a non-negative integer).


Your task is to implement the following methods:

    1. applyDiscount(percent)
        • Reduces the price of the product by the given percentage.
        • The final price should be rounded to the nearest integer (use Math.round).
        • Example: If a product costs $1000 and a 10% discount is applied, the new price should be $900.

    2. purchase(quantity)
        • If the requested quantity is available in stock, reduce the stock accordingly.
        • If not enough stock is available, return "Not enough stock".
        • Example: If 5 items are in stock and the user buys 3, the new stock should be 2.


Challenge

    • Implement the Product constructor with name, price, and stock properties.
    • Attach applyDiscount (percent) and purchase(quantity) methods to the prototype (for memory efficiency).
    • Ensure integer values for price after applying a discount.
    • Handle edge cases like zero stock or excessive purchases.
*/

// You need to implement the Product constructor function and its prototype methods

function Product(name, price, stock) {
    // Initialize name, price, and stock properties
    this.name = name;
    this.price = price;
    this.stock = stock;
}

// Define applyDiscount method on Product's prototype
Product.prototype.applyDiscount = function (percent) {
    this.price = Math.round(this.price - this.price * (percent / 100));
    return this.price;
}

// Define purchase method on Product's prototype
Product.prototype.purchase = function (quantity) {
    if (this.stock >= quantity) {
        this.stock -= quantity;
        return this.stock;
    } else {
        return "Not enough stock";
    }
}

// Taste cases
const product = new Product("Laptop", 1000, 5);
product.applyDiscount(10);
console.log(product.price); // Output: 900
console.log(product.purchase(3)); // Output: 2

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    const { name, price, stock, discount, quantity } = JSON.parse(input);
    const product = new Product(name, price, stock);
    product.applyDiscount(discount);
    process.stdout.write(JSON.stringify(product.purchase(quantity)));
    rl.close();
});