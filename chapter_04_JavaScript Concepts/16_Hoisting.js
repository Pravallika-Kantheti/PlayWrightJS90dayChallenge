//what is hoisting in JavaScript
//Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase.
// This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.
// For example, if you declare a variable with var, it will be hoisted and initialized with undefined,
// while if you declare a variable with let or const, it will be hoisted but not initialized, resulting in a ReferenceError if you try to access it before declaration. Function declarations are fully hoisted, meaning you can call them before they appear in the code.

//JS engine - line by line JIT compiler
console.log(greeting);
var greeting = "Hello, World!"; // Output: undefined (the declaration of 'greeting' is hoisted but not its initialization)
console.log(greeting); // Output: "Hello, World!" (now 'greeting' is initialized with the value "Hello, World!")

//behind the scenes, the JavaScript engine processes the code in two phases: the compilation phase and the execution phase. 
// During the compilation phase, it hoists variable and function declarations to the top of their respective scopes. This is why you can access variables declared with var before their declaration, but they will be undefined until they are initialized. In contrast, variables declared with let and const are also hoisted but not initialized, which is why accessing them before declaration results in a ReferenceError. Function declarations are fully hoisted, allowing you to call them before their definition in the code.

//var greeting -> hoisted to the top of the scope and initialized with undefined
//console.log(greeting) -> this line is executed before the initialization of 'greeting', so it outputs undefined
//var greeting = "Hello, World!" -> the assignment happens during the execution phase, after the hoisting has occurred 
//console.log(greeting) -> this line is executed after the initialization of 'greeting', so it outputs "Hello, World!" 

//console.log(name); // This will throw a ReferenceError because 'name' is hoisted but not initialized
let name = "Alice";
console.log(name); // Output: "Alice" (now 'name' is initialized with the value "Alice")

//console.log(age); // This will throw a ReferenceError because 'age' is hoisted but not initialized
const age = 30;
console.log(age); // Output: 30 (now 'age' is initialized with the value 30)    

greet(); // Output: "Hello from the greet function!" (the function declaration is hoisted, so it can be called before its definition)
function greet() {
    console.log("Hello from the greet function!");
}
