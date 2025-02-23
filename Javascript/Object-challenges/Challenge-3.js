/*
Problem Statement
    You are building an online shopping platform. Some products have discounts, and some don't. You need to check whether a product object contains a discount property.

Challenge
    Write a function that checks if a product object has a discount property and returns true or false.

Constraints
    product should be a valid object.
*/

// You just need to implement the hasDiscount function
function hasDiscount(product) {
    // Check if product has discount property
    if (typeof product !== 'object' || product === null) {
        return false;
    }
    return product.hasOwnProperty('discount');
}

// Test cases

// Valid product object

const product = {
    name: 'Laptop',
    price: 40000,
    discount: 1000
};

console.log(hasDiscount(product)); // true

// Invalid product object

console.log(hasDiscount({"name": "Monitor", "price": 12000})) // false

console.log(hasDiscount(null)); // false

console.log(hasDiscount({})); // false