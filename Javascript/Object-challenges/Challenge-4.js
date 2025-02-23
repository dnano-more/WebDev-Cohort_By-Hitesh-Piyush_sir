/*
Problem Statement
    For security reasons, when a user logs out, their password should be removed from the user object before storing it in logs or analytics.

Challenge
    Write a function that removes the password property from a user object and returns the updated object.

Constraints
    ▶ user should be a valid object with at least a username and password.
    ▶ If password does not exist, return the object as it is.
*/

// You just need to implement the removePassword function
function removePassword(user) {
    // Remove password property
    if (user.hasOwnProperty('password')) {
        delete user.password;
    }
    return user;
}


// Test cases

// Valid user object

const user = {
    username: 'john_doe',
    password: 'password123'
};

console.log(removePassword(user)); // { username: 'john_doe' }

// Invalid user object

console.log(removePassword(null)); // null

console.log(removePassword({})); // {}

console.log(removePassword({ username: 'john_doe' })); // { username: 'john_doe' }

