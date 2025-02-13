/*
You have a pile of gifts, and you want to give each of your friends one gift at a time. You keep giving them gifts until they all get one.

Problem Statement:
Write a function to distribute gifts to your friends one by one. It should stop once all your friends have received a gift.
*/

// You just need to implement the distributeGifts function
function distributeGifts(totalGifts, friends) {
    let giftGiven = 0;
    
    for(let i = 0; i < friends; i++) {
        if(totalGifts > 0) {
            giftGiven++;
            totalGifts--;
        }
    }
    return giftGiven;
}

console.log(distributeGifts(10, 5)); // 5
console.log(distributeGifts(2, 4)); // 2

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    const { totalGifts, friends } = JSON.parse(input); // Parse input as number
    // Call our function
    const result = distributeGifts(totalGifts, friends);

    // Output the result as a JSON string
    process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above