// ============================================================
// 37_Confusing_comparison.js
// Loose (==) vs Strict (===) Equality Deep Dive
// ============================================================

// ============================================================
// RULE 1: Strict Equality (===) does NOT perform type coercion.
// If types differ, it returns false immediately.
// ============================================================

console.log("=== RULE 1: Strict Equality (No Coercion) ===");
console.log(1 === "1");        // false (number vs string)
console.log(true === 1);       // false (boolean vs number)
console.log(null === undefined); // false (different types)
console.log(0 === false);      // false (number vs boolean)
console.log("" === false);     // false (string vs boolean)
console.log("\n");

// ============================================================
// RULE 2: Loose Equality (==) performs type coercion.
// If types differ, JS attempts to convert one or both values.
// ============================================================

console.log("=== RULE 2: Loose Equality (With Coercion) ===");
console.log(1 == "1");         // true  (string "1" becomes number 1)
console.log(true == 1);        // true  (true becomes number 1)
console.log(false == 0);       // true  (false becomes number 0)
console.log("" == false);      // true  ("" becomes 0, false becomes 0)
console.log("\n");

// ============================================================
// RULE 3: null and undefined are ONLY equal to each other
// with loose equality. They are NOT equal to anything else.
// ============================================================

console.log("=== RULE 3: null and undefined ===");
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(null == 0);          // false (surprising!)
console.log(null == false);      // false
console.log(null == "null");     // false
console.log(undefined == false); // false
console.log(undefined == 0);     // false
console.log("\n");

// ============================================================
// RULE 4: NaN is NEVER equal to anything, not even itself!
// Use Number.isNaN() or Object.is() to check for NaN.
// ============================================================

console.log("=== RULE 4: NaN Behavior ===");
console.log(NaN == NaN);       // false
console.log(NaN === NaN);      // false
console.log(NaN == "NaN");     // false
console.log(NaN == undefined); // false
console.log(Number.isNaN(NaN)); // true (correct way)
console.log("\n");

// ============================================================
// RULE 5: +0 and -0 are treated as equal with == and ===,
// but Object.is() distinguishes them.
// ============================================================

console.log("=== RULE 5: +0 vs -0 ===");
console.log(+0 == -0);         // true
console.log(+0 === -0);        // true
console.log(Object.is(+0, -0)); // false (Object.is is strict)
console.log(1 / +0 === 1 / -0); // false (Infinity vs -Infinity)
console.log("\n");

// ============================================================
// RULE 6: Boolean coercion can be misleading.
// When comparing a boolean with a non-boolean,
// the boolean is converted to a number first.
// ============================================================

console.log("=== RULE 6: Boolean Coercion Traps ===");
console.log(true == "1");      // true (true -> 1, "1" -> 1)
console.log(true == "2");      // false (true -> 1, "2" -> 2)
console.log(false == "0");     // true (false -> 0, "0" -> 0)
console.log(false == []);      // true (false -> 0, [] -> "" -> 0)
console.log(true == []);       // false (true -> 1, [] -> 0)
console.log(true == [1]);      // true (true -> 1, [1] -> "1" -> 1)
console.log("\n");

// ============================================================
// RULE 7: Object comparisons use reference, not deep equality.
// Even if two objects look identical, they are different references.
// ============================================================

console.log("=== RULE 7: Object Reference Comparison ===");
const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;

console.log(obj1 == obj2);   // false (different references)
console.log(obj1 === obj2);  // false (different references)
console.log(obj1 == obj3);   // true (same reference)
console.log(obj1 === obj3);  // true (same reference)
console.log("\n");

// ============================================================
// RULE 8: Array to Primitive coercion can be tricky.
// Arrays are coerced to strings first.
// ============================================================

console.log("=== RULE 8: Array Coercion ===");
console.log([] == false);      // true ([] -> "" -> 0, false -> 0)
console.log([] == "");         // true ([] -> "")
console.log([] == 0);          // true ([] -> "" -> 0)
console.log([0] == false);     // true ([0] -> "0" -> 0, false -> 0)
console.log([1, 2] == "1,2");   // true ([1,2] -> "1,2")
console.log([[]] == "");       // true ([[]] -> "" -> "")
console.log([[]] == 0);        // true ([[]] -> "" -> 0)
console.log("\n");

// ============================================================
// RULE 9: Object to Primitive coercion calls valueOf() or toString().
// This can lead to unexpected results with custom objects.
// ============================================================

console.log("=== RULE 9: Object to Primitive Coercion ===");
const weirdObj = {
  toString() { return "1"; },
  valueOf() { return 2; }
};

console.log(weirdObj == "1");  // false (ToPrimitive uses valueOf first: 2 != "1" -> 2 != 1)
console.log(weirdObj == 1);    // false (uses valueOf: 2 != 1)
console.log(weirdObj == 2);    // true  (uses valueOf: 2 == 2)
console.log(weirdObj + 0);     // 2 (uses valueOf for arithmetic)
console.log("\n");

// ============================================================
// RULE 10: Empty strings, spaces, and string coercion.
// ============================================================

console.log("=== RULE 10: String Coercion ===");
console.log("" == false);      // true ("" -> 0, false -> 0)
console.log(" " == false);     // true (" " -> 0, false -> 0)
console.log("\t" == false);    // true (whitespace -> 0)
console.log("0" == false);     // true ("0" -> 0, false -> 0)
console.log("0" == 0);         // true ("0" -> 0)
console.log("00" == 0);        // true ("00" -> 0)
console.log(" 0 " == 0);       // true (" 0 " -> 0)
console.log("\n");

// ============================================================
// RULE 11: typeof null is "object" (historical bug in JS).
// This is a well-known gotcha.
// ============================================================

console.log("=== RULE 11: typeof null ===");
console.log(typeof null);      // "object" (not "null"!)
console.log(null == null);     // true
console.log(null === null);    // true
console.log("\n");

// ============================================================
// RULE 12: Object.is() - The "SameValue" comparison.
// Fixes the NaN and +0/-0 issues of ===.
// ============================================================

console.log("=== RULE 12: Object.is() ===");
console.log(Object.is(NaN, NaN));      // true
console.log(Object.is(+0, -0));        // false
console.log(Object.is(1, "1"));        // false (no coercion)
console.log(Object.is(null, undefined)); // false
console.log("\n");

// ============================================================
// RULE 13: Common Interview Gotchas and Tricks.
// ============================================================

console.log("=== RULE 13: Common Gotchas ===");
console.log([] == ![]);        // true ([] -> 0, ![] -> false -> 0)
console.log([] == []);         // false (different references)
console.log({} == {});         // false (different references)
console.log({} == "[object Object]"); // true (toString)
console.log({} == "[object Object]"); // true
console.log(![] == []);        // true (![] -> false, [] -> 0)

// Trick: If you want to check if something is truthy but not necessarily equal
console.log(!![]);             // true (coerce to boolean)
console.log(!!{});             // true
console.log(!!"");             // false
console.log("\n");

// ============================================================
// RECOMMENDATIONS
// ============================================================

console.log("=== RECOMMENDATIONS ===");
console.log("1. Always use === and !== instead of == and != to avoid unexpected coercion.");
console.log("2. Use Number.isNaN() for NaN checks.");
console.log("3. Use Object.is() when you need to distinguish +0 and -0 or correctly compare NaN.");
console.log("4. For deep object/array equality, use a library like lodash or implement recursively.");
console.log("5. Be careful with boolean comparisons against non-booleans - JS coerces booleans to numbers!");
console.log("6. null and undefined are only equal to each other with loose equality.");
console.log("7. Remember that typeof null === 'object' - always check value explicitly if needed.");
