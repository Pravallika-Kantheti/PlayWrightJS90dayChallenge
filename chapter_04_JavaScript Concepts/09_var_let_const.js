//we can declare variables in three waysvar v = "Pravallika K";
var v = "Pravallika K";
let a = true;
const PI = 3.14159;

console.log("var v:", v);
console.log("let a:", a);
console.log("const PI:", PI);

//`var` was the original keyword in JavaScript. It is **function-scoped**, 
// can be **redeclared**, can be **reassigned**, 
// and gets **hoisted** to the top of its scope with an initial value of `undefined`.

//In modern automation code, we avoid `var` because it leaks out 
// of `if` and `for` blocks, which causes confusing bugs in test loops.

//var can be re-declared and updated
var v = "New Value";//re-declaring var v
console.log("Updated var v:", v);

v = "Another Value"; //updating var v without re-declaring
console.log("Updated var v again:", v);

var testcases = ["login", "signup", "logout"];
console.log("iterating with i inside loop - Test cases:", testcases);

for (var i = 0; i < testcases.length; i++) {
    console.log("Test case:", testcases[i]);
}

console.log("Value of i after loop:", i); //i is accessible here due to var's function scope


//`let` was introduced in ES6. It is **block-scoped**, cannot be **redeclared** in the same scope,
//let can be updated but not re-declared
a = false;
console.log("Updated let a:", a);