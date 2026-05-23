//const - block scope variable declaration
//cannot be reassigned or redeclared in the same scope
//it is hoisted but not initialized until its declaration is evaluated (temporal dead zone)
//accessing it before declaration will throw a ReferenceError
const a = 10;
console.log(a); // Output: 10 (global variable 'a' is accessible here)

//a = 20; // This will throw a TypeError because 'a' is declared with 'const' and cannot be reassigned

const retryCount = 1;
//retryCount = retryCount + 1; // This will throw a TypeError because 'retryCount' is declared with 'const' and cannot be reassigned

const testStatus = "passed";
if (testStatus === "passed") {
    const message = "Congratulations! You passed the test.";
    console.log(message); // Output: "Congratulations! You passed the test."
}

//console.log(message); // This will throw a ReferenceError because 'message' is not accessible outside the if block

const BASEURL = "https://api.example.com/v1/";
console.log(BASEURL); // Output: "https://api.example.com/v1/"
//BASEURL = "https://api.example.com/v2/"; // This will throw a TypeError because 'BASEURL' is declared with 'const' and cannot be reassigned

const PI = 3.14159;
console.log(PI); // Output: 3.14159 