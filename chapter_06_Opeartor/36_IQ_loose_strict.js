console.log(0 == ""); // Output: true (0 is coerced to false and empty string is coerced to false before comparison)
console.log(0 === ""); // Output: false (0 is a number and empty string is a string, so they are not equal)

console.log(0 == "0"); // Output: true (0 is coerced to "0" before comparison)
console.log(0 === "0"); // Output: false (0 is a number and "0" is a string, so they are not equal) 

console.log("" == "0"); //transitively broken
// Output: false (empty string is coerced to false and "0" is coerced to true before comparison
console.log("" === "0"); // Output: false (empty string is a string and "0" is a string, but they are not equal in value

"" == 0      // true  → "" → Number("") → 0, 0 == 0
"0" == 0     // true  → "0" → Number("0") → 0, 0 == 0
"" == "0"    // false → both strings, compared as-is

//If `==` transitive: `a==b && b==c` → `a==c`. Here `"" == 0` and `0 == "0"` both true, but `"" == "0"` false. Broken.

//WHY?   `==` algorithm branch on types:

// - string vs number → coerce string to number
// - string vs string → byte compare, no coercion
// - `Number("")`  = 0, `Number("0")`  = 0 — but that path never runs when both sides already strings

console.log(null == undefined); // Output: true (null and undefined are considered equal in non-strict equality)
console.log(null === undefined); // Output: false (null and undefined are different types, so they are not equal in strict equality)    
console.log(null == 0); // Output: false (null is only equal to undefined, not to any other value)
console.log(undefined == 0); // Output: false (undefined is only equal to null, not to any other value)
console.log(null === 0); // Output: false (strict equality checks for both value and type)
console.log(undefined === 0); // Output: false (strict equality checks for both value and type)