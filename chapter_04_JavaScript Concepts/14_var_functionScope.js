function printHello() {
    console.log("Hello, World!");
    var a = 20; // This variable is scoped to the function, it does not affect the outer variable 'a'
    console.log(a); // Output: 20 (this will print the local variable 'a' which is 20)
    if (true) {
        var a = 30;
        console.log(a); // Output: 30 (this will print the local variable 'a' which is 30, it overrides the previous value of 'a' in the function scope)
    }
    console.log("F->", a); // Output: 30 (this will print the local variable 'a' which is 30, it overrides the previous value of 'a' in the function scope)
}

printHello(); // Call the function to execute its code
var a = 10;
console.log("G->", a); // Output: 10 (this will print the global variable 'a' which is 10, it is not affected by the local variable 'a' in the function scope)  
