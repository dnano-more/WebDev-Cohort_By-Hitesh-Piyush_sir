/*
Problem Statement
    In many applications, data is stored in deeply nested objects. Accessing a property from a deeply nested object requires multiple checks to avoid errors. Instead of manually checking each level, we need a function that safely retrieves a value from a nested object using a dot-separated key path.

Challenge
    Write a function that takes a nested object and a key path string (e.g., "user.address.city") and returns the value. If any part of the path is missing, return "Key not found".

Constraints
    ▶ The input object should be valid.
    ▶ The key path should be a string with dot notation (.) separating keys.
    ▶ If a key is missing, return "Key not found".
    ▶ The function should handle deeply nested objects.
*/

// You just need to implement the getNestedValue function
function getNestedValue(obj, keyPath) {
    // Return the value from the nested object based on keyPath
    let keys = keyPath.split('.');
    let value = obj;
    for (let key of keys) {
        if (value[key] === undefined) {
            return 'Key not found';
        }
        value = value[key];
    }
    return value;
}

// Test cases

let user = {
    name: 'John',
    age: 16,
    address: {
        city: 'New York',
        zip: 10001
    }
};
console.log(getNestedValue(user, 'name')); // John
console.log(getNestedValue(user, 'age')); // 16
console.log(getNestedValue(user, 'address.city')); // New York
console.log(getNestedValue(user, 'address.zip')); // 10001
console.log(getNestedValue(user, 'address.country')); // Key not found
console.log(getNestedValue(user, 'city')); // Key not found
console.log(getNestedValue(user, 'address')); // { city: 'New York', zip: 10001 }
console.log(getNestedValue(user, 'address.city.zip')); // Key not found
console.log(getNestedValue(user, 'address.city.zip.country')); // Key not found