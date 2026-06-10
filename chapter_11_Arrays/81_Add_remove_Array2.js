let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

//splice method can be used to add or remove elements from an array
//splice(start, deleteCount, item1, item2, ...)
arr.splice(2, 1);
arr.splice(3, 0, 7, 8); //adds 7 and 8 at index 3  
console.log(arr);

arr.splice(2, 2); //removes 2 elements from index 2
console.log(arr);

arr.splice(1, 0, 9); //adds 9 at index 1
console.log(arr);

arr.splice(3); //removes all elements from index 3 to the end of the array
console.log(arr);

arr.splice(2, 1, 4, 5, 6); //removes element at index 2 and adds 4, 5, 6
console.log(arr);