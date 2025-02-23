/*
Problem Statement
    In your web application, some objects contain unnecessary properties. To optimize performance, you need to remove all properties that have null or undefined values.

Challenge
    Write a function that removes all properties with null or undefined values from an object.

Constraints
    ▶ The input should be a valid object.
    ▶ If the object has no valid properties left, return {).
*/

// You just need to implement the cleanObject function
function cleanObject(obj) {
    // Remove all properties with null or undefined values
    let cleanedObject = {};
    for (let key in obj) {
        if (obj[key] !== null && obj[key] !== undefined) {
            cleanedObject[key] = obj[key];
        }
    }
    return cleanedObject;
}

// Test cases

let obj1 = {
    name: 'John',
    age: 16,
    grade: '10th',
    city: null
};
console.log(cleanObject(obj1)); // { name: 'John', age: 16, grade: '10th' }

let obj2 = {
    name: 'Emma',
    age: 14,
    grade: '8th',
    city: 'New York',
    address: undefined
};
console.log(cleanObject(obj2)); // { name: 'Emma', age: 14, grade: '8th', city: 'New York' }

let obj3 = {
    name: 'Tom',
    age: 5,
    grade: '1st',
    city: null,
    address: undefined
};
console.log(cleanObject(obj3)); // { name: 'Tom', age: 5, grade: '1st' }

console.log(cleanObject({})); // { }
console.log(cleanObject({ city: null, address: undefined })); // { }
console.log(cleanObject({ city: 'New York', address: '123 Main St' })); // { city: 'New York', address: '123 Main St' }