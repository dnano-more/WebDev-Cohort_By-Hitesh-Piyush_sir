/*
You lost your phone in a list of items. Find the index of "Phone".

Problem Statement: Create a function that finds the index of "Phone" in the list of items and returns the index.
*/

function findPhone(items) {
    // Return the index of "Phone" in the items array
    items = ["Keys", "Wallet", "Phone", "Laptop", "Headphones"]
    items.indexOf("Phone");
    return items;
}

console.log(findPhone()); // 2