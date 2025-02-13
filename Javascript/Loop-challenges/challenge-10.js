/*
You're on a camping trip with your friends, and you all want to set up a starry mountain as a symbol of your adventure. To make things more fun, you decide to use stars to draw an inverted mountain pattern. The challenge: print it so everyone can admire the majestic mountain shape! ▲★

Problem Statement:
Create a function inverted Mountain(n) that prints an inverted mountain made of stars. The number n represents the number of stars at the top, and the pattern should reduce by one star each line until only one star is left at the bottom.

For example:
For n 4, the output will look like:
****
***
**
*

🌟 Hint 1:
When you want to print multiple lines, you can use '\n' to add a new line after each row of stars. This will help you keep the output organized and align it properly!
*/

function invertedMountain(n) {
    // let stars = n; // Initial number of stars
    // for (let i = 0; i < n; i++) {
    //     console.log("*".repeat(stars));
    //     stars--; // Decrease the number of stars for the next line
    // }

    let monutain = '';
    
    // Loop for each row
    for(let i = n; i >= 1; i--) {
        // Loop for each column
        for(let j = 0; j <= i; j++) {
            monutain += '*'; // Add a star to the row
        }
        monutain += '\n';
    }
    return console.log(monutain);
}

// Call the function to print the inverted mountain shape
invertedMountain(4);


