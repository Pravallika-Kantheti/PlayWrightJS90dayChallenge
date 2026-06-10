// Checking Arrays

// Check if something IS an array
let result = Array.isArray([1, 2, 3]);
console.log(result);
let result1 = Array.isArray("a"); // []
console.log(result1);
console.log(Array.isArray([]));
// every & some
//Determines whether all the members of an array satisfy the specified test
[80, 90, 85].every(s => s >= 70); // true
[80, 60, 85].every(s => s >= 70); // false

// Playwright API 
[200, 201, 203].every(statuscode => statuscode > 200);

// some — AT LEAST ONE must pass
//Determines whether the specified callback function returns true for any element of an array.


[80, 60, 85].some(s => s < 70); // true
[80, 90, 85].some(s => s < 70); // false

//arrow function: s => s >= 70