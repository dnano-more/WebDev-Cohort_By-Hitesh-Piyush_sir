/*
Problem Statement
    You are developing a car rental service. Each car has a brand and model, but some cars don't have a color assigned yet. You need to add a color property dynamically when a customer selects a car.

Challenge
    Write a function that takes a car object and a color string, then adds the color property to the object.

Constraints
    car should be a valid object with at least brand and model properties.
    color should be a non-empty string, otherwise return "Invalid color".
*/

// You just need to implement the addCarColor function
function addCarColor(car, color) {
    // Add color property to the car object
    if (typeof car !== 'object' ||
        car === null ||
        !car.brand ||
        !car.model ||
        color === '') {
        return "Invalid color";
    }
    car.color = color;
    return car;
}

// Test cases

// Valid car object

const car = {
    brand: 'Toyota',
    model: 'Corolla'
};

console.log(addCarColor(car, 'red')); // { brand: 'Toyota', model: 'Corolla', color: 'red' }

// Invalid car object

console.log(addCarColor(null, 'red')); // Invalid color

console.log(addCarColor({}, 'red')); // Invalid color

console.log(addCarColor({ brand: 'Toyota' }, 'red')); // Invalid color

console.log(addCarColor({ model: 'Corolla' }, 'red')); // Invalid color

console.log(addCarColor({ brand: 'Toyota', model: 'Corolla' }, '')); // Invalid color