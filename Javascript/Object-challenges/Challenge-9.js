/*
Problem Statement
    You are working on a web application where objects contain nested properties. JavaScript's built-in assignment (=) creates a shallow copy, meaning changes to the copied object will also affect the original. To prevent this, you need to create a deep copy of an object, ensuring that nested objects are also cloned properly.

Challenge
    Write a function that takes an object and returns a deep copy of it.

Constraints
    ▶ The input should be a valid object.
    ▶ The function should work with nested objects and arrays inside objects.
    ▶ The function should not modify the original object
*/

// You just need to implement the deepClone function
function deepClone(obj) {
    // Return a deep copy of obj
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    let clonedObject = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObject[key] = deepClone(obj[key]);
        }
    }
    return clonedObject;
}

// Test cases

let obj1 = {
    name: 'John',
    age: 16,
    grade: '10th',
    address: {
        city: 'New York',
        zip: 10001
    }
};
let clonedObj1 = deepClone(obj1);
clonedObj1.address.city = 'Los Angeles';
console.log(obj1); // { name: 'John', age: 16, grade: '10th', address: { city: 'New York', zip: 10001 } }
console.log(clonedObj1); // { name: 'John', age: 16, grade: '10th', address: { city: 'Los Angeles', zip: 10001 } }

let obj2 = {
    name: 'Emma',
    age: 14,
    grade: '8th',
    address: {
        city: 'Chicago',
        zip: 60601
    }
};
let clonedObj2 = deepClone(obj2);
clonedObj2.address.zip = 60602;
console.log(obj2); // { name: 'Emma', age: 14, grade: '8th', address: { city: 'Chicago', zip: 60601 } }
console.log(clonedObj2); // { name: 'Emma', age: 14, grade: '8th', address: { city: 'Chicago', zip: 60602 } }

let obj3 = {
    name: 'Tom',
    age: 5,
    grade: '1st',
    address: {
        city: 'Houston',
        zip: 77001
    }
};
let clonedObj3 = deepClone(obj3);
clonedObj3.address = {
    city: 'Dallas',
    zip: 75201
};
console.log(obj3); // { name: 'Tom', age: 5, grade: '1st', address: { city: 'Houston', zip: 77001 } }
console.log(clonedObj3); // { name: 'Tom', age: 5, grade: '1st', address: { city: 'Dallas', zip: 75201 } }

console.log(deepClone({})); // { }
console.log(deepClone({ city: 'New York', address: '123 Main St' })); // { city: 'New York', address: '123 Main St' }
console.log(deepClone({ city: 'New York', address: { zip: 10001 } })); // { city: 'New York', address: { zip: 10001 } }
console.log(deepClone({ city: 'New York', address: { zip: 10001, coordinates: [40.7128, 74.0060] } })); // { city: 'New York', address: { zip: 10001, coordinates: [40.7128, 74.0060] } }

// Note: The deepClone function is a recursive function that creates a deep copy of the input object. It checks if the input is an object or an array. If it is an object, it creates a new object and recursively calls the deepClone function on each property. If it is an array, it creates a new array and recursively calls the deepClone function on each element. This ensures that nested objects and arrays are also cloned properly. The function returns the cloned object or array.
