//Creating Arrays
//Array literals
let emptyArray = [];
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
let mixedArray = [1, "two", true, null];

//array constructor
let emptyArray2 = new Array(3); //creates an array of length 3 with empty slots
let numbers2 = new Array(1, 2, 3, 4, 5);
let fruits2 = new Array("apple", "banana", "orange");
let mixedArray2 = new Array(1, "two", true, null);

console.log(emptyArray2);
console.log(numbers2);
console.log(fruits2);
console.log(mixedArray2);

let arr = new Array(5, 1);
console.log(arr); // [5, 1]

let arr2 = new Array(5);
console.log(arr2); // [ <5 empty items> ]

//Array.of() method
let arr3 = Array.of(5);
console.log(arr3); // [5]

let arr4 = Array.of(5, 1);
console.log(arr4); // [5, 1]

let arr5 = Array.of(5, true, "Peter");
console.log(arr5); // [5, true, "Peter"]

//Array.from() method   
let str = "Hello";
let arr6 = Array.from(str);
console.log(arr6); // ['H', 'e', 'l', 'l', 'o'] 

let set = new Set([1, 2, 3]);
let arr7 = Array.from(set);
console.log(arr7); // [1, 2, 3]