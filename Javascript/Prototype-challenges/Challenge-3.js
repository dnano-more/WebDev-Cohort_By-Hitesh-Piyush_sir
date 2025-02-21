/*
Problem statement
You need to create a Counter constructor function that initializes a count property to 0. The counter should have two prototype methods:
increment() increases the count by 1.
decrement() decreases the count by 1.

Challenge
Implement a constructor function Counter that initializes count to 0
Attach increment () and decrement() methods to the prototype.

Hint 1
Submissions
Use this.count += 1; in increment() and this.count -= 1; in decrement().
*/

function Counter() {
    // Initialize count property
    this.count = 0;
}

// Define increment method on Counter's prototype
Counter.prototype.increment = function () {
    this.count += 1;
}

// Define decrement method on Counter's prototype
Counter.prototype.decrement = function () {
    this.count -= 1;
}

// Test code
const myCounter = new Counter();
console.log(myCounter.count); // Expected output: 0
myCounter.increment();
console.log(myCounter.count); // Expected output: 1
myCounter.decrement();
console.log(myCounter.count); // Expected output: 0
myCounter.decrement();
console.log(myCounter.count); // Expected output: -1
myCounter.increment();
console.log(myCounter.count); // Expected output: 0
myCounter.increment();
console.log(myCounter.count); // Expected output: 1
myCounter.increment();
console.log(myCounter.count); // Expected output: 2
myCounter.increment();
console.log(myCounter.count); // Expected output: 3
myCounter.decrement();
console.log(myCounter.count); // Expected output: 2
myCounter.decrement();
console.log(myCounter.count); // Expected output: 1
myCounter.decrement();
console.log(myCounter.count); // Expected output: 0
myCounter.decrement();
console.log(myCounter.count); // Expected output: -1
myCounter.decrement();
console.log(myCounter.count); // Expected output: -2
myCounter.decrement();
console.log(myCounter.count); // Expected output: -3
myCounter.decrement();
console.log(myCounter.count); // Expected output: -4