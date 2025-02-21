/*
Problem statement
You need to create a constructor function Animal that takes a name parameter. Add a method makeSound to its prototype, which always returns "Some generic sound".

Challenge
Implement a constructor function Animal that initializes the name property.
Attach a method makeSound to its prototype that returns "Some generic sound".

Hint 1
Use Animal.prototype.makeSound = function() { return "Some generic sound"; } to define the method.
*/

function Animal(name) {
    // Initialize name property
    this.name = name;
}

// Add method to prototype
Animal.prototype.makeSound = function () {
    return "Some generic sound";
};

// Test code
const myAnimal = new Animal("Leo");
console.log(myAnimal.makeSound()); // Expected output: "Some generic sound"




