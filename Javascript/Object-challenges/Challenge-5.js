/*
Problem Statement
    You are analyzing user data in a database. You need to count how many properties exist in a user's profile to determine if the profile is complete.

Challenge
    Write a function that returns the number of properties in an object.

Constraints
    ▶ user should be a valid object.
    ▶ If the object is empty, return 0.
*/

// You just need to implement the countProperties function
function countProperties(user) {
    // Return the number of properties in user
    if (typeof user !== 'object' || user === null) {
        return 0;
    }
    return Object.keys(user).length;
}

// Test cases

// Valid user object

const user = {
    username: 'john_doe',
    email: 'nano@more.com',    
    password: 'password123'
};

console.log(countProperties(user)); // 3

// Invalid user object

console.log(countProperties(null)); // 0

console.log(countProperties({})); // 0

console.log(countProperties({ username: 'john_doe' })); // 1
