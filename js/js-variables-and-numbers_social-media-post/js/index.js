console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

const postTitle = "Started JavaScript today!";

const postText =
  "Today we started learning JavaScript in class. This is fascinating to all of the no one who will see this post on my non-existent social media accounts.";

let sumLikes = 742;

const userName = "Yuval";

const isReported = false;

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

console.log("Title: ", postTitle);

console.log("Text:", postText);

console.log("Likes:", sumLikes);

console.log("Name:", userName);

console.log("Reported?", isReported);

sumLikes += 1;

console.log("1 like added:", sumLikes);
