/*
A puppy named Max was playing in the park, but he went to the first position of the queue instead of waiting at the end. You need to add Max at the beginning of the queue.

Problem Statement: Create a function that adds a puppy to the front of the queue and returns the updated queue.
*/

// You just need to implement the addPuppy function
function addPuppy(queue, puppyName) {
    // Add puppyName at the beginning of queue and return updated queue
    queue = ["Tom", "Jerry", "Spike"]
    puppyName = "Max"
    queue.unshift(puppyName);
    return queue;
}

console.log(addPuppy());