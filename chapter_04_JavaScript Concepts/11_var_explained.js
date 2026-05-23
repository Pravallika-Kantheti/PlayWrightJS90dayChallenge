var a = 10;
//var is functiona scoped
console.log(a); // Output: 10 //global variable 'a' is accessible here

function printHello() {
    console.log("Hello, World!"); // Output: "Hello, World!"
    var a = 20; // This variable is scoped to the function, it does not affect the outer variable 'a'
    console.log(a); // Output: 20 (this will print the local variable 'a' which is 20)
}

printHello(); // Call the function to execute its code

//what is function scope
//Function scope means that a variable declared with var is only accessible within the function in which it is defined.
// If a variable is declared inside a function, it cannot be accessed from outside that function.
// However, if a variable is declared outside of any function, it is considered a global variable and can be accessed from anywhere in the code.