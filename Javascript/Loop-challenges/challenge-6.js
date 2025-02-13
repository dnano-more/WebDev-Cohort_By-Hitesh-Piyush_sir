/*
You're planning a week's schedule and need to count the days you are working. You have an array where each element represents a day of the week. How can you calculate how many days you are working?

Problem Statement:
Create a function that takes an array of days (e.g., ["Monday", "Tuesday", "Friday"]) and returns the number of days you're working. "Saturday" and "Sunday" are not working days.
*/

// You just need to implement the workingDays function
function workingDays(days) {
    // your code here
    let workingDays = 0;
    for (let i = 0; i < days.length; i++) {
        if (days[i] !== "Saturday" && days[i] !== "Sunday") {
            workingDays++;
        }
    }
    return workingDays;
}

console.log(workingDays(["Monday", "Tuesday", "Friday"])); // 3