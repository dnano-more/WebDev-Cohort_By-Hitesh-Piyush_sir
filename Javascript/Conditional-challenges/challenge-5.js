/* 
A leap year is divisible by 4, but not by 100 unless also divisible by 400.

Problem Statement:
Write a function to check if a year is a leap year.
*/

// You just need to implement the isLeapYear function
function isLeapYear(year) {
    // Return "Leap Year" if the year is a leap year, otherwise return "Not a Leap Year"
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
     return "Leap Year";   
    } else {
        return "Not a Leap Year";
    }
}

console.log(isLeapYear(2020));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
