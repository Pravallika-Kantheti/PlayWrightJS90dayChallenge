//core difference of strict and loose comparison is that strict comparison checks for 
// both value and type, while loose comparison only checks for value and performs type coercion if necessary.

let x = 5;
let y = "5";
// Loose comparison (==) - performs type coercion
console.log("Loose comparison (==): " + (x == y)); // Output: true (5 is coerced to "5" before comparison)

// Strict comparison (===) - does not perform type coercion
console.log("Strict comparison (===): " + (x === y)); // Output: false (5 is a number and "5" is a string, so they are not equal)   

console.log("Loose comparison (==) with different types: " + (0 == false)); // Output: true (0 is coerced to false before comparison)
console.log("Strict comparison (===) with different types: " + (0 === false)); // Output: false (0 is a number and false is a boolean, so they are not equal)   

console.log("Loose comparison (==) with null and undefined: " + (null == undefined)); // Output: true (null and undefined are considered equal in loose comparison)
console.log("Strict comparison (===) with null and undefined: " + (null === undefined)); // Output: false (null and undefined are different types, so they are not equal)

console.log("Loose comparison (==) with empty string and false: " + ("" == false)); // Output: true (empty string is coerced to false before comparison)
console.log("Strict comparison (===) with empty string and false: " + ("" === false)); // Output: false (empty string is a string and false is a boolean, so they are not equal)


console.log("Loose comparison (==) with 0 and false: " + (0 == "")); // Output: true (0 is coerced to false and empty string is coerced to false before comparison)
console.log("Strict comparison (===) with 0 and false: " + (0 === "")); // Output: false (0 is a number and empty string is a string, so they are not equal)

console.log("Loose comparison (==) with null and false: " + (1 == true)); // Output: true (1 is coerced to true before comparison)
console.log("Strict comparison (===) with null and false: " + (1 === true)); // Output: false (1 is a number and true is a boolean, so they are not equal)

console.log("Loose comparison (==) with undefined and false: " + (true == "1")); // Output: true (true is coerced to 1 and "1" is coerced to 1 before comparison)
console.log("Strict comparison (===) with undefined and false: " + (true === "1")); // Output: false (true is a boolean and "1" is a string, so they are not equal)

// Similarly, for not equal comparisons:
// Loose comparison (!=) - performs type coercion
console.log("Loose comparison (!=): " + (x != y)); // Output: false (5 is coerced to "5" before comparison)
// Strict comparison (!==) - does not perform type coercion
console.log("Strict comparison (!==): " + (x !== y)); // Output: true (5 is a number and "5" is a string, so they are not equal)
