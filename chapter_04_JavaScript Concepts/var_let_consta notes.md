1. Variable
A variable is a named container used to store data that can be referenced and manipulated later.
let age = 25;
age is a variable holding the value 25. It acts like a labeled box in memory.
---
    2. Identifier
An identifier is the name you give to a variable, function, class, or property.It is how you label and reference that entity in your code.
let userName = "John";   // "userName" is the identifier
function greet() { }      // "greet" is the identifier
const PI = 3.14;         // "PI" is the identifier
Rules for identifiers:
    - Can contain letters, digits, underscores(_), and dollar signs($)
        - Cannot start with a digit
            - Are case -sensitive(name and Name are different)
                - Cannot be reserved keywords(like let, function, class)
---
    3. Literal
A literal is the actual value written directly in the source code.It represents a fixed value, not a variable.
let message = "Hello";   // "Hello" is a string literal
let count = 10;          // 10 is a numeric literal
let isActive = true;     // true is a boolean literal
let user = null;         // null is a literal
let person = {           // { ... } is an object literal
    name: "Alice"        // "Alice" is also a string literal
};
let colors = ["red"];    // ["red"] is an array literal
---
    How They Work Together
Look at this single line of code:
let userName = "John";
Part	What it is	Explanation
let Keyword	Declares a variable
userName	Identifier	The name of the variable
    = Operator	Assigns the value
"John"	Literal	The actual value being stored
userName(as a whole)	Variable	The named storage holding the value
---
    Quick Analogy
Think of a mailbox:
- Variable = The physical mailbox itself(stores something)
-Identifier = The address / name on the mailbox(how you find it)
-Literal = The actual letter inside the mailbox(the raw data)

Understanding var in JavaScript
var is the oldest way to declare variables in JavaScript (ES5 and earlier). Here's what you need to know:
Basic Syntax
var name = "John";
var age = 25;
Key Characteristics
1. Function Scope (not block scope)
function test() {
    var x = 10;
    if (true) {
        var x = 20;  // Same variable!
        console.log(x); // 20
    }
    console.log(x); // 20 (not 10)
}
2. Hoisting
Variables declared with var are hoisted to the top of their scope, but only the declaration—not the initialization.
console.log(a); // undefined (not an error)
var a = 5;
// JavaScript interprets this as:
var a;
console.log(a);
a = 5;
3. Re-declaration Allowed
var x = 1;
var x = 2;  // No error
4. Global Object Property
When declared in the global scope, var creates a property on the global object (window in browsers):
var foo = "bar";
console.log(window.foo); // "bar"
Comparison with let and const
Feature	var	let	const
Scope	Function	Block	Block
Hoisting	Yes (initialized as undefined)	Yes (not initialized)	Yes (not initialized)
Re-declaration	✅ Allowed	❌ Not allowed	❌ Not allowed
Re-assignment	✅ Allowed	✅ Allowed	❌ Not allowed
Global object property	✅ Yes	❌ No	❌ No
Modern Best Practice
Avoid var in modern JavaScript. Use:
- const by default (for values that won't be reassigned)
- let when you need to reassign a variable
// Good
const PI = 3.14;
let count = 0;
count++;
// Avoid
var count = 0;
When Might You Still See var?
- Legacy codebases
- Code targeting very old browsers without transpilation
- Some specific hoisting patterns (rarely justified)

Here are the most common and dangerous bugs caused by var:
1. The Classic Loop Closure Bug (Most Famous)
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Expected: 0, 1, 2
// Actual:   3, 3, 3
Why: var i is function-scoped, not block-scoped. By the time the callbacks run, the loop has finished and i equals 3.
Fix with let:
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// 0, 1, 2 ✓
---
2. Variable "Leaks" Outside Blocks
function getUser() {
    if (true) {
        var user = "Alice";
    }
    return user; // Works! But shouldn't
}
console.log(getUser()); // "Alice"
A developer might reasonably expect user to only exist inside the if block. With var, it bleeds into the entire function.
---
3. Accidental Re-declaration Overwrites
var role = "admin";
function setupUser() {
    var role = "guest"; // Meant to be a separate local variable
    // ... do something ...
}
setupUser();
console.log(role); // "admin" — fine here, BUT:
Worse version — you might not realize you're overwriting something in the same scope:
var count = 10;
// ... 100 lines later ...
var count = 0; // Oops, silently wiped out the previous value
With let or const, this throws a SyntaxError: Identifier 'count' has already been declared.
---
4. Hoisting Creates undefined Surprises
function checkUser() {
    console.log(user); // undefined (not an error!)
    // ... some logic ...
    var user = "John";
    return user;
}
checkUser();
Why: JavaScript hoists the declaration to the top:
function checkUser() {
    var user;          // hoisted declaration
    console.log(user); // undefined
    user = "John";
    return user;
}
This silently masks typos or ordering mistakes. With let:
function checkUser() {
    console.log(user); // ReferenceError! Caught immediately
    let user = "John";
}
---
5. Global Object Pollution
var status = "active";
console.log(window.status); // "active" (in browsers)
If a library or script later does delete window.status or expects window.status to be something else, weird bugs happen. let and const don't create global object properties.
---
6. Confusing Closure in Event Handlers
var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        console.log("Clicked button #" + i);
    });
}
// Every button logs the same (final) number!
---
7. TDZ (Temporal Dead Zone) Bypass Leading to Logic Errors
With var, you can do this without crashing:
function calculate() {
    if (!value) {          // value is undefined here, so condition is true
        var value = 100;   // hoisted declaration made value undefined above
    }
    return value;
}
console.log(calculate()); // 100 — works by accident
But if you refactor:
function calculate() {
    var result = value * 2; // NaN! value is hoisted but undefined
    var value = 10;
    return result;
}
console.log(calculate()); // NaN
With let:
function calculate() {
    let result = value * 2; // ReferenceError: Cannot access before initialization
    let value = 10;
}
The error is better than silent NaN.
---
Summary Table
Bug	Root Cause	let/const Behavior
Loop closures all share same value	Function scope	Block scope creates new binding each iteration
Variables leak outside if/for	No block scope	Block-scoped
Accidental re-declaration	Allowed silently	Throws SyntaxError
undefined instead of error	Hoisted with undefined	Throws ReferenceError (TDZ)
Global object pollution	Creates window property	Does not
Bottom line: var fails silently in ways that produce hard-to-debug behavior. let and const fail loudly with clear errors.