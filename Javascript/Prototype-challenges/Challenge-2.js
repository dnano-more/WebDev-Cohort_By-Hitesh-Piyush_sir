/*
Problem statement
You are designing a simple robot system. Each robot has a name and a battery Level. The robot should have a method charge() that increases the battery level by 20, but it cannot exceed 100.

Challenge
Implement a constructor function Robot that initializes name and battery Level.
Attach a method charge() to its prototype that increases batteryLevel by 20, ensuring it does not go above 100.

Hint 1
Use Math.min(this.batteryLevel + 20, 100); inside charge().
*/

function Robot(name, batteryLevel) {
    // Initialize name and batteryLevel properties
    this.name = name;
    this.batteryLevel = batteryLevel;
}

// Add method to prototype
Robot.prototype.charge = function () {
    this.batteryLevel = Math.min(this.batteryLevel + 20, 100);
};

// Test code
const myRobot = new Robot("Robo1", 50);
myRobot.charge();
console.log(myRobot.batteryLevel); // Expected output: 70
myRobot.charge();
console.log(myRobot.batteryLevel); // Expected output: 90
myRobot.charge();
console.log(myRobot.batteryLevel); // Expected output: 100
myRobot.charge();
console.log(myRobot.batteryLevel); // Expected output: 100
