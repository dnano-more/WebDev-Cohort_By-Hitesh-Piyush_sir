/*
A school bus has students inside, but the first student in line needs to get off at the next stop. Remove the first student from the bus.

Problem Statement: Create a function that removes the first student from the bus and returns the updated list.
*/

// You just need to implement the removeStudent function
function removeStudent(bus) {
    // Remove the first student and return the updated bus list
    bus = ["John", "Sarah", "Mike", "Emma"]
    bus.shift();
    return bus;
}

console.log(removeStudent());