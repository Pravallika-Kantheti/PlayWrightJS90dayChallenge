//Accessing an array element is done by referring to the index number, inside square brackets:
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);
console.log(fruits[1]);

console.log(fruits.at(-1));
console.log(fruits[fruits.length - 1]);

//Modifying an array element
fruits[1] = "grape";
console.log(fruits);