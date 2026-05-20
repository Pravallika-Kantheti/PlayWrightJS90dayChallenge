//Maximum number between two numbers, okay, by using the ternary operator 
let firstNum = 10;
let secondNum = 20;
let max = firstNum > secondNum ? firstNum : secondNum;
console.log("Maximum number is: " + max); // Output: Maximum number is: 20


//And maximum between the three numbers also by using turnary operator

let num1 = 15;
let num2 = 25;
let num3 = 20;
let maxNum = num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
console.log("Maximum number among three is: " + maxNum); // Output: Maximum number among three is: 


let a = 5;
console.log(a++ + ++a - --a + a-- + ++a);
console.log(a);
