// Higher-Order Functions
// A function that takes a function as argument or returns a function.

function runWithLoggin(testFn, testName) {
    let result = testFn();
    return result;
}

function loginTest() {
    return "pass";
}

function loginTestFAILED() {
    return "fail";
}

console.log(runWithLoggin(loginTest, "Login Test"));
console.log(runWithLoggin(loginTestFAILED, "Dashboard Failed Test"));