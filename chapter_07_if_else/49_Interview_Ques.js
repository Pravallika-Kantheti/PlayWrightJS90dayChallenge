if ("hello") {
    console.log("This is true");
}//explain this code
// In this code, we have an if statement that checks the condition "hello". 
// In JavaScript, non-empty strings are considered truthy values, so the condition evaluates to true. 
// Therefore, the code inside the if block will be executed, and it will print "This is true" to the console. 
// If the condition were falsy (like an empty string, 0, null, undefined, or false), the code inside the if block would not execute.

if ("hello") console.log("This is true");

if ("hello") console.log("This is true"); else console.log("This is false");

if (42) console.log("This is true"); else console.log("This is false");

if (0) console.log("This is true"); else console.log("This is false");

if ("") console.log("This is true"); else console.log("This is false");

if (null) console.log("This is true"); else console.log("This is false");

if (undefined) console.log("This is true"); else console.log("This is false");
if (NaN) console.log("This is true"); else console.log("This is false");

if ([]) console.log("This is true"); else console.log("This is false");

if ({}) console.log("This is true"); else console.log("This is false");

let name = undefined
if (name) {
    console.log("Name is defined: " + name);
} else {
    console.log("Name is undefined or falsy");
}