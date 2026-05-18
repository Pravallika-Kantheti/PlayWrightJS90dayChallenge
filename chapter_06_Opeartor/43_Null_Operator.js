//null operator
//The nullish coalescing operator (??) is used to provide a default value when dealing with null or undefined values. It returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.        

let name = null;
let defaultName = "Guest";
let displayName = name ?? defaultName;
console.log(displayName); // Output: Guest (since name is null, it returns defaultName)

let age = undefined;
let defaultAge = 18;
let displayAge = age ?? defaultAge;
console.log(displayAge); // Output: 18 (since age is undefined, it returns defaultAge)

let score = 0;
let defaultScore = 100;
let displayScore = score ?? defaultScore;
console.log(displayScore); // Output: 0 (since score is not null or undefined, it returns score)

console.log(null == 0); // Output: false (null is only equal to undefined, not to any other value)
console.log(undefined == 0); // Output: false (undefined is only equal to null, not to any other value)
console.log(null === 0); // Output: false (strict equality checks for both value and type)
console.log(undefined === 0); // Output: false (strict equality checks for both value and type)

val = null || "Default Value";
console.log(val); // Output: Default Value (since null is falsy, it returns "Default Value")

//typescript nullish coalescing operator example
let userInput = null;
let defaultInput = "Default Input";
let finalInput = userInput ?? defaultInput;
console.log(finalInput); // Output: Default Input (since userInput is null, it returns defaultInput)
val = "which milk ->" + val;
console.log(val); // Output: which milk ->Default Value