// Primitive vs Reference Types
let a = 10;
let b = a;
console.log(b);
b = 99;
console.log(b);
console.log(a);

// Objects — copied by REFERENCE , call by ref. 
// Reference - object, array, function
let obj1 = { val: 10 };
console.log(obj1.val);
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val);