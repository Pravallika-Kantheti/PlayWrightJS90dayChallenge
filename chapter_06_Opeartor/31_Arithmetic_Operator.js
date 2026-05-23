//Arithmetic Operator
//Arithmetic operators are used to perform mathematical operations on numbers.
//The basic arithmetic operators are: +, -, *, /, and %.
let a = 10;
let b = 5;

console.log("sum: " + (a + b)); // Output: 15
console.log("difference: " + (a - b)); // Output: 5
console.log("product: " + (a * b)); // Output: 50
console.log("quotient: " + (a / b)); // Output: 2
console.log("remainder or modulo: " + (a % b)); // Output: 0 (remainder of a divided by b)      

console.log("even check: " + (a % 2 === 0)); // Output: true (checks if a is even)
console.log("odd check: " + (b % 2 !== 0)); // Output: true (checks if b is odd)

let c = 15;
c += 5; // equivalent to c = c + 5
console.log("c after addition: " + c); // Output: 20

//what is += and -= operator
//The += operator is a shorthand for addition assignment. It adds the value on the right to the variable on the left and assigns the result back to the variable. For example, x += 5 is equivalent to x = x + 5.
//The -= operator is a shorthand for subtraction assignment. It subtracts the value on the right from the variable on the left and assigns the result back to the variable. For example, x -= 3 is equivalent to x = x - 3.