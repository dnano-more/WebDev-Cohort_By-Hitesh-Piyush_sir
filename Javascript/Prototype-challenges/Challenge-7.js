/*
Problem statement
Create an Employee constructor that initializes name, position, and salary. Implement:
applyBonus (percent): Increases the salary by the given percentage.

Challenge
Implement Employee constructor with name, position, and salary
Attach applyBonus (percent) to the prototype to increase salary.
*/

// You need to implement the Employee constructor function and its prototype method

function Employee(name, position, salary) {
    // Initialize name, position, and salary properties
    this.employeeName = name;
    this.employeePosition = position;
    this.employeeSalary = salary
}

// Define applyBonus method on Employee's prototype
Employee.prototype.applyBonus = function (percent) {
  this.employeeSalary = Math.round(this.employeeSalary + this.employeeSalary * (percent / 100));
  return this.employeeSalary;
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { name, position, salary, bonus } = JSON.parse(input);
  const employee = new Employee(name, position, salary);
  employee.applyBonus(bonus);
  process.stdout.write(JSON.stringify(employee.employeeSalary));
});
