/*
Create a basic calculator that performs +, -, *, / based on user input.

Problem Statement:
Write a function that uses switch-case to perform arithmetic operations. Handle the edge case of "Cannot divide by zero".
*/

// You just need to implement the calculator function
function calculator(num1, num2, operator) {
    // Perform basic arithmetic operations using switch case
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            result = num1 / num2;
            break;

        default:
            return "Invalid Operator";
    }
    return result;
}

console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "-"));
console.log(calculator(10, 5, "*"));