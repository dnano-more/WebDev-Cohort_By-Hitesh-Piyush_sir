/*
You're packing chocolate bars into gift boxes. Each box needs to have the same number of chocolate bars. You need to find out how many boxes of chocolates you'll have after packing the bars.

Problem Statement:
Create a function that counts how many boxes you need based on the total number of chocolate bars and the number of chocolate bars per box, using a loop.

Hint 1
You can use division to calculate how many full boxes of chocolate bars you can make. Consider using a loop to simulate the packing process and check if any bars are left over.
*/

// You just need to implement the countBoxes function
function countBoxes(totalBars, barsPerBox) {
    let boxes = 0;
    while(totalBars >= barsPerBox) {
        totalBars -= barsPerBox;
        boxes++;
    }
    return boxes;
}

console.log(countBoxes(20, 4)); // 5
console.log(countBoxes(17, 5)); // 3




