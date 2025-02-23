/*

Problem Statement
    You are working on a system that stores user profile information from multiple sources. Sometimes, the same user has two different records, and you need to merge them into a single object.

Challenge
    Write a function that takes two objects and merges them into one. If a key exists in both objects, the value from the second object should overwrite the value from the first object.

Constraints
    ▶ Both inputs should be valid objects.
    ▶ If an object is empty, return the other object as it is.
    ▶ If both objects are empty, return {).

*/

// You just need to implement the mergeObjects function
function mergeObjects(obj1, obj2) {
    // Merge obj1 and obj2 into a single object
    let mergedObject = {};
    for (let key in obj1) {
        mergedObject[key] = obj1[key];
    }
    for (let key in obj2) {
        mergedObject[key] = obj2[key];
    }
    return mergedObject;
}

// Test cases
let obj1 = {
    name: 'John',
    age: 16,
    grade: '10th'
};
let obj2 = {
    grade: '12th',
    city: 'New York'
};
console.log(mergeObjects(obj1, obj2)); // { name: 'John', age: 16, grade: '12th', city: 'New York' }

let obj3 = {
    name: 'Emma',
    age: 14,
    grade: '8th'
};
let obj4 = {
    grade: '10th',
    city: 'Los Angeles'
};
console.log(mergeObjects(obj3, obj4)); // { name: 'Emma', age: 14, grade: '10th', city: 'Los Angeles' }

console.log(mergeObjects({}, obj4)); // { grade: '10th', city: 'Los Angeles' }
console.log(mergeObjects(obj3, {})); // { name: 'Emma', age: 14, grade: '8th' }
console.log(mergeObjects({}, {})); // { }