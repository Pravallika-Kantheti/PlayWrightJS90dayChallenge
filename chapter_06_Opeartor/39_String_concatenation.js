let s = "Hello, ";
let t = "World!";
console.log(s + t); // Output: "Hello, World!"

let a = 5;
let b = 10;
console.log(a + b); // Output: 15

// When using the + operator with a string and a number, the number is coerced to a string and concatenated
console.log(s + a); // Output: "Hello, 5"
console.log(t + b); // Output: "World!10"

let x = "Hi";
x += " there"; // This is equivalent to s = s + " there";
console.log(s); // Output: "Hi there"