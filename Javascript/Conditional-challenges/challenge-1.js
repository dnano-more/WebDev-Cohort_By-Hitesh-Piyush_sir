/*
You are organizing a party and have a list of invited guests. But just before the party starts, a new friend decides to join. You need to add them to the guest list.
Problem Statement: Create a function that adds a new guest to the guest list and returns the updated list.
Javascript
*/

// You just need to implement the checkEvenOdd function
// The input and output are already taken care of. You just need to write the function.

function checkEvenOdd(num) {
    // Return "Even" if num is even, otherwise return "Odd"
    if (num % 2 === 0 ) {
        return "Even";
    }
    else {
        return "Odd";
    }
}

let sankhya1 = checkEvenOdd(4);
let sankhya2 = checkEvenOdd(7);

console.log(sankhya1);
console.log(sankhya2);