//let - block scope variable declaration
//can be reassigned but not redeclared in the same scope
//it is hoisted but not initialized until its declaration is evaluated (temporal dead zone)
//accessing it before declaration will throw a ReferenceError

//what is block scope
//Block scope means that a variable declared with let is only accessible within the block (enclosed by curly braces {}) in which it is defined. 
// This includes functions, loops, and if statements. For example:
let a = 10;
console.log(a); // Output: 10 (global variable 'a' is accessible here)

let retryCount = 1;
retryCount = retryCount + 1; // reassigning the value of retryCount
console.log(retryCount); // Output: 2

//let retryCount = 3; // This will throw a SyntaxError because 'retryCount' has already been declared in the same scope

let testStatus = "passed";
if (testStatus === "passed") {
    let message = "Congratulations! You passed the test.";
    console.log(message); // Output: "Congratulations! You passed the test."
}

//console.log(message); // This will throw a ReferenceError because 'message' is not accessible outside the if block
