/*
Problem Statement
    You are working on a system that stores product details in an object. However, for some functionalities, the data needs to be in an array format.

Challenge
    Write a function that converts an object into an array of key-value pairs. Each element in the array should be an array where the first item is the key and the second item is the value.

Constraints
    ▶ The input should be a valid object.
    ▶ If the object is empty, return an empty array.
*/

// You just need to implement the objectToArray function
function objectToArray(obj) {
    // Convert the object into an array of key-value pairs
    let result = [];
    for (let key in obj) {
        result.push([key, obj[key]]);
    }
    return result;
}

// Test cases
let product = {
    name: 'Laptop',
    price: 50000,
    brand: 'Dell'
};
console.log(objectToArray(product)); // [ [ 'name', 'Laptop' ], [ 'price', 50000 ], [ 'brand', 'Dell' ] ]

let product2 = {
    name: 'Smartphone',
    price: 20000,
    brand: 'Samsung',
    color: 'Black'
};
console.log(objectToArray(product2)); // [ [ 'name', 'Smartphone' ], [ 'price', 20000 ], [ 'brand', 'Samsung' ], [ 'color', 'Black' ] ]

console.log(objectToArray({})); // [ ]