//getting the values one after the other

let tests = ["login", "checkout", "search"];

//for loop
for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}
console.log("-----------")
//for... of loop
for (test of tests) {
    console.log(test);
}

console.log("-----------")
//forEach method
tests.forEach(test => console.log(test));

tests.forEach((test, index) => {
    console.log(test, index);
    //console.log(`${test} at index ${index}`);
});

console.log("-----------")
//for... in loop

for (let index in tests) {
    console.log(index, "->", tests[index]); //index = in
}