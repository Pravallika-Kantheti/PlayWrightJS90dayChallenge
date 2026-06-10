let results = ["pass", "fail", "pass", "error", "fail"];

//indexOf method returns the first index at which a given element can be found in the array, 
// or -1 if it is not present.
console.log(results.indexOf("pass")); //0
console.log(results.indexOf("fail")); //1
console.log(results.indexOf("error")); //3
console.log(results.indexOf("not found")); //-1

//lastIndexOf method returns the last index at which a given element can be found in the array,
// or -1 if it is not present.
console.log(results.lastIndexOf("pass")); //2
console.log(results.lastIndexOf("fail")); //4
console.log(results.lastIndexOf("error")); //3
console.log(results.lastIndexOf("not found")); //-1

//includes method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(results.includes("pass")); //true
console.log(results.includes("fail"));  //true
console.log(results.includes("error")); //true
console.log(results.includes("not found")); //false

//find method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
console.log(results.find(result => result === "pass")); //pass
console.log(results.find(result => result === "fail")); //fail
console.log(results.find(result => result === "error")); //error
console.log(results.find(result => result === "not found")); //undefined

let arr = [1, 2, 3, 4, 5];
console.log(arr.find(x => x > 3)); //4

console.log(arr.findIndex(x => x > 3)); //3

console.log(arr.findLast(x => x > 3)); //5

console.log(arr.findLastIndex(x => x > 3)); //4

