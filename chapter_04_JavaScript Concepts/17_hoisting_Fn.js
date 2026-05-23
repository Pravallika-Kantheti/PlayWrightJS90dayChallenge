
function getUserStatus() {
    console.log(statusCode); // Output: undefined (due to hoisting, the variable declaration is moved to the top of the function scope, but it is not initialized until the assignment is executed)
    var statusCode = 200;
    console.log(statusCode); // Output: 200 (the variable is now initialized with the value 200)
}

getUserStatus(); // Call the function to execute its code