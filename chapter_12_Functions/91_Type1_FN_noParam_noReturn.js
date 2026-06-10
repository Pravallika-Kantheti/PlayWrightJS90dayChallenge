// Define
function greet() { // parameter
    console.log("Hi");
}

// This is a Basic type-1 function, which means no argument, no return. 
// Call
greet(); // calling argument

let a = greet();
console.log(a);

// Rule of thumb:
// - Parameters are in the function declaration
// - Arguments are in the function invocation

// A parameter is the variable listed in the function definition —
// it's a placeholder that accepts incoming values.
// function greet(name, greeting) {
//   // `name` and `greeting` are PARAMETERS
//   console.log(`${greeting}, ${name}!`);
// }
// Argument
// An argument is the actual value you pass into the function when you call it.
// greet('Alice', 'Hello');
// // 'Alice' and 'Hello' are ARGUMENTS