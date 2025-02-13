/*
You've been tasked with designing the perfect shiny diamond rug for Crush's room. They love stars, and you've decided to make a sparkling pattern using them. You need to help them create this rug, where the stars are arranged in the shape of a diamond!

Problem Statement:
Create a function shinyDiamondRug(n) that prints a shiny diamond shape made of stars. The number n represents the size of the diamond, with the middle of the diamond having 2n - 1 stars.

Important Rules:
1. Each line must not have trailing spaces.
2. The output must not have an extra newline at the end.

For example:
For n = 4, the output will look like:
   *
  ***
 *****
*******
 *****
  ***
   *
   
Hint 1
To print a diamond shape, break it into two parts: the upper part and the lower part. For the upper part (including the middle), use increasing stars, starting from 1 star to 2n-1 stars. For the lower part, use decreasing stars, starting from 2n-3 stars back down to 1. Make sure to handle spaces before the stars so that the shape aligns nicely.

Hint 2
In JavaScript, '\n' is a special character that represents a new line. When you use it in a string, it will create a line break, meaning that any text after '\n' will appear on the next line.
*/

function shinyDiamondRug(n) {
    let spaces = n - 1; // Initial number of spaces before the stars
    let stars = 1; // Initial number of stars

    // Upper part of the diamond (including the middle)
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(spaces) + "*".repeat(stars));
        spaces--; // Decrease the number of spaces for the next line
        stars += 2; // Increase the number of stars for the next line
    }

    spaces = 1; // Reset the number of spaces for the lower part
    stars = 2 * n - 3; // Set the initial number of stars for the lower part

    // Lower part of the diamond
    for (let i = 0; i < n - 1; i++) {
        console.log(" ".repeat(spaces) + "*".repeat(stars));
        spaces++; // Increase the number of spaces for the next line
        stars -= 2; // Decrease the number of stars for the next line
    }
}

// Call the function to print the diamond shape
shinyDiamondRug(4);