console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

const bookTitle = "I'm a Book!";
const author = "Writer McWriterson";
let bookRating = 2.1;
let bookSales = "10";

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// Solution for this section:

// console.log(
//   "Title:",
//   bookTitle,
//   "\n",
//   "Author:",
//   author,
//   "\n",
//   "Rating:",
//   bookRating,
//   "\n",
//   "Sales:",
//   bookSales
// );

// bookSales = 11;
// bookRating = 1.8;

// console.log(
//   "Title:",
//   bookTitle,
//   "\n",
//   "Author:",
//   author,
//   "\n",
//   "Rating:",
//   bookRating,
//   "\n",
//   "Sales:",
//   bookSales
// );

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

function logBookData() {
  console.log(bookTitle, "\n", author, "\n", bookRating, "\n", bookSales);
}

logBookData();

bookSales = 13;

logBookData();

bookSales = 27;

logBookData();
