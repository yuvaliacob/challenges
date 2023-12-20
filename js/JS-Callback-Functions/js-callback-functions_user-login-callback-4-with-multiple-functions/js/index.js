console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!

function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}`);
}

function showErrorMessage(errorMessage) {
  console.log(`Login error: ${errorMessage}`);
}

handleUserLogin(showWelcomeMessage, showErrorMessage, "Jane Doe");

handleUserLogin(showWelcomeMessage, showErrorMessage, "John Doe");

// Tasks
// Write a function with the "function" keyword named "showWelcomeMessage". The function should accept two parameters: "userName" and "userRole". The function should log the following message to the console: "Welcome userName!Youareloggedinnowas{userRole}."

// Write a function with the "function" keyword named "showErrorMessage". The function should accept one parameter "errorMessage" The function should log the following message to the console: "Login error: ${errorMessage}"

// Call the function "handleUserLogin" and pass three arguments in this order:

// callback function: "showWelcomeMessage"
// callback function: "showErrorMessage"
// user name string: "Jane Doe" (You should see the log from "showWelcomeMessage" in the console)

// Call the function "handleUserLogin" and pass three arguments in this order:
// callback function: "showWelcomeMessage"
// callback function: "showErrorMessage"
// user name string: "John Doe" (You should see the log from "showErrorMessage" in the console)
