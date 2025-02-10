/*
Given a temperature and a scale ("C" or "F"), convert it to the other scale.

Problem Statement:
Write a function that uses switch-case to convert temperature.
*/

// You just need to implement the convertTemperature function
function convertTemperature(value, scale) {
    // Convert temperature based on the scale ("C" to "F" or "F" to "C")
    let convertedTemprature;
    let unit;
    switch (scale) {
        case "C":
            // Formula to convert Celsius to Fahrenheit: (0°C × 9/5) + 32 = 32°F
            convertedTemprature = (value * 9) / 5 + 32;
            unit = "°F";
            break;

        case "F":
            // Formula to convert Fahrenheit to Celsius: (32°F − 32) × 5/9 = 0°C
            convertedTemprature = ((value - 32) * 5) / 9;
            unit = "°C";
            break;
    
        default:
            return "Invalid Sacle";
    }
    return convertedTemprature + unit;
}

let convertedTemp1 = convertTemperature(0, "C");

let convertedTemp2 = convertTemperature(100, "C");

let convertedTemp3 = convertTemperature(32, "F");

console.log(convertedTemp1);
console.log(convertedTemp2);
console.log(convertedTemp3);
