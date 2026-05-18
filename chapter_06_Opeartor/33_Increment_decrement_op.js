//increment and decrement operator
//The increment operator (++) is used to increase the value of a variable by 1, while the decrement operator (--) is used to decrease the value of a variable by 1. 
//These operators can be used in both prefix and postfix forms, which determine the order of evaluation.
//In prefix form, the operator is placed before the variable (e.g., ++a), and the variable is incremented or decremented before its value is returned.
//In postfix form, the operator is placed after the variable (e.g., a++), and the variable's value is returned before it is incremented or decremented.

let a = 10;
let b = 5;

console.log("increment: " + (++a)); // Output: 11 (increments a by 1 before returning the value)
console.log("decrement: " + (--b)); // Output: 4 (decrements b by 1 before returning the value) 

console.log("post-increment: " + (a++)); // Output: 11 (returns a then increments it by 1)
console.log("post-decrement: " + (b--)); // Output: 4 (returns b then decrements it by 1)       

console.log("current value of a: " + a); // Output: 12 (after post-increment)
console.log("current value of b: " + b); // Output: 3 (after post-decrement)  

//compound assignment with increment and decrement
let c = 5;
c += 2; // equivalent to c = c + 2
console.log("compound assignment with addition: " + c); // Output: 7    
c -= 3; // equivalent to c = c - 3
console.log("compound assignment with subtraction: " + c); // Output: 4 
c *= 2; // equivalent to c = c * 2
console.log("compound assignment with multiplication: " + c); // Output: 8
c /= 4; // equivalent to c = c / 4
console.log("compound assignment with division: " + c); // Output: 2
c %= 2; // equivalent to c = c % 2
console.log("compound assignment with modulus: " + c); // Output: 0 (remainder of c divided by 2)