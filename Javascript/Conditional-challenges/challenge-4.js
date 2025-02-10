/*
Given a student's marks, determine their grade based on this scale:
90+-A
-80-89-B
• 70-79- C
• 60-69- D
• Below 60 F
Problem Statement:
Write a function that returns the corresponding grade using if-else.
*/

// You just need to implement the calculateGrade function
function calculateGrade(marks) {
    // Return grade based on the marks
    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    }
    else if (marks >= 70) {
        return "C";
    }
    else if (marks >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}

console.log(calculateGrade(85));
console.log(calculateGrade(45));
console.log(calculateGrade(92));