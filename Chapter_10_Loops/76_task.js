//Triangle Classifier:

//Write a program that classifies a triangle based on its side lengths. Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal). Use an if-else statement to classify the triangle.

let a = 5;
let b = 10;
let c = 6;

if (a === b && b === c) {
    console.log("All sides are equal - Equilateral Triangle");
} else if (a === b || b === c || a === c) {
    console.log("Two sides are equal - Isosceles Triangle");
} else if (a !== b && b !== c && a !== c) {
    console.log("All sides are different - Scalene Triangle");
} else {
    console.log("Not a valid triangle");
}

//FizzBuzz task

//Write a program that prints the numbers from 1 to 100. For multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz". Use a for loop to iterate through the numbers and an if-else statement to determine what to print.

for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0 && i % 5 === 0)) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}