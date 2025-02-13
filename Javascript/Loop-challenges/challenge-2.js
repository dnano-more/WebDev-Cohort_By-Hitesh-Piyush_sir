/*
You have a basket full of apples. You need to count how many apples are in the basket, but you don't know the exact number. Each time you pick an apple, you count one. Your task is to count how many apples are in the basket.

Problem Statement:
Create a function that counts the number of apples in the basket using a loop.
*/

// You just need to implement the countApples function
function countApples(apples) {
    let appleCount = 0;
        
        for(let i = 0; i < apples; i++) {
            appleCount++;
        }
        return appleCount;
    }
  
    console.log(countApples(10)); // 10
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const apples = parseInt(input); // Parse input as a number
    // Call our function
    const result = countApples(apples);
  
    // Output the result as a JSON string
    process.stdout.write(JSON.stringify(result));
  });
  // Please don't remove the code above
  