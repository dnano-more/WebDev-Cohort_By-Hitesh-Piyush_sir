/*
You are organizing a party and have a list of invited guests. But just before the party starts, a new friend decides to join. You need to add them to the guest list.

Problem Statement: Create a function that adds a new guest list and returns the updated list.
*/

// You just need to implement the addGuest function
function addGuest(guestList, newGuest) {
    // Add the newGuest to guestList and return the updated list
    guestList.push(newGuest);
    return guestList;
}

// Test cases
const input = {"guestList": ["Anirudh", "Mukul"], "newGuest": "Radhika"};
const updatedGuestList = addGuest(input.guestList, input.newGuest);
console.log(updatedGuestList); // ["Anirudh", "Mukul", "Radhika"]