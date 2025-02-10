/*
Given a number (1-7), return the corresponding day of the week.

Problem Statement:
Write a function that uses switch-case to return the day name for valid inputs otherwise "Invalid Day".
*/

// You just need to implement the getDayOfWeek function
function getDayOfWeek(day) {
    // Return the corresponding day of the week based on the input number
    switch (day) {
        case 1:
            return "Monday";
        
        case 2:
            return "Tuesday";

        case 3:
            return "Wednesday";

        case 3:
            return "Thursady";

        case 4:
            return "Friday";

        case 5:
            return "Saturady";

        case 6:
            return "Sunday";

        default: 
            return "Invalid Day";
    }
}

console.log(getDayOfWeek(1));
console.log(getDayOfWeek(5));
console.log(getDayOfWeek(7));