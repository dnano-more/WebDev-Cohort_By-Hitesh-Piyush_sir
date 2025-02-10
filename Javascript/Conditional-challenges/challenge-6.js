/*
You need to determine what action to take based on traffic light colors:
"Red" → Stop
"Yellow" Slow Down
"Green" → Go
"Blue" → Invalid Color
Problem Statement:
Write a function that uses switch-case to return the correct action.
*/

// You just need to implement the trafficLightAction function
function trafficLightAction(color) {
    // Return "Stop", "Slow Down", or "Go" based on the traffic light color
    switch (color.toLowerCase()) {
        case "red":
            return "Stop";

        case "yellow":
            return "Slow Down";

        case "green":
            return "Go";

        default:
            return "Invalid Color";
    }
}

console.log(trafficLightAction("Red"));
console.log(trafficLightAction("Yellow"));
console.log(trafficLightAction("Green"));
