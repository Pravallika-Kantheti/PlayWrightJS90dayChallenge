//comparison operator   
//Comparison operators are used to compare two values and return a boolean result (true or false) based on the comparison.
//The basic comparison operators are: ==, ===, !=, !==, >, <, >=, and <=.   

let a = 10;
let b = 5;
console.log("equal to: " + (a == b)); // Output: false (compares values, not types)
console.log("strict equal to: " + (a === b)); // Output: false (compares values and types)
console.log("not equal to: " + (a != b)); // Output: true (compares values, not types)
console.log("strict not equal to: " + (a !== b)); // Output: true (compares values and types)
console.log("greater than: " + (a > b)); // Output: true (checks if a is greater than b)
console.log("less than: " + (a < b)); // Output: false (checks if a is less than b)
console.log("greater than or equal to: " + (a >= b)); // Output: true (checks if a is greater than or equal to b)
console.log("less than or equal to: " + (a <= b)); // Output: false (checks if a is less than or equal to b)
