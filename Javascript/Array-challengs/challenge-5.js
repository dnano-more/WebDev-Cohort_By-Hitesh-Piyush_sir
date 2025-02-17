/*
Your bookshelf is a mess! You need to arrange the books in alphabetical order.

Problem Statement: Create a function that sorts the books alphabetically and returns the updated list.
*/

function sortBooks(books) {
    books = ["Math", "English", "Science", "History"]
    books.sort();
    return books;
}

console.log(sortBooks());
