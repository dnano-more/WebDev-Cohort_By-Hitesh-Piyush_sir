/*
A new VIP guest arrives at the club and should be at the front of the queue. Add them to the beginning of the list.

Problem Statement: Create a function that adds a VIP guest to the front of the queue and returns the updated list.
*/

// You just need to implement the addVIP function
function addVIP(queue, vipGuest) {
    // Add vipGuest at the beginning of queue and return updated queue
    queue.unshift(vipGuest);
    return queue;
}

console.log(addVIP(["Zoya", "Arav", "Ishan"], "Nano")); // ["Nano", "Tom", "Jerry", "Spike"]