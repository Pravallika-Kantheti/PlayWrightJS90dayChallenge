// ============================================================
// JavaScript Comments - Comprehensive Examples
// ============================================================

// ============================================================================
// 1. SINGLE-LINE COMMENTS
// ============================================================================

// This is a single-line comment
var userName = "Alice"; // This comment is at the end of a line

// Single-line comments can explain what the next line does
var totalPrice = 100; // Base price in dollars

// Multiple single-line comments can be used consecutively
// This is comment line 1
// This is comment line 2
// This is comment line 3
var maxUsers = 50;

// Comments are ignored by JavaScript - they don't affect execution
// console.log("This line is commented out and won't run");
console.log("1. Single-line comments work fine!");


// ============================================================================
// 2. MULTI-LINE COMMENTS (Block Comments)
// ============================================================================

/*
 * This is a multi-line comment.
 * It can span across multiple lines.
 * Each line starts with an asterisk for readability (optional).
 */
var productId = 123;

/*
   This is also a valid multi-line comment.
   You don't need asterisks at the start of every line.
   But it looks cleaner with them.
*/
var quantity = 5;

/* Multi-line comments can also be on a single line */
var discount = 0.1;

/*
 * Multi-line comments are useful for:
 * - Explaining complex logic
 * - Adding file headers
 * - Temporarily disabling multiple lines of code
 */
console.log("2. Multi-line comments work fine!");


// ============================================================================
// 3. INLINE COMMENTS
// ============================================================================

var firstName = "John";    // User's first name
var lastName = "Doe";      // User's last name
var age = 30;              // User's age in years
var isActive = true;       // Account status flag

// Inline comments explaining function parameters
function calculateArea(width /* in pixels */, height /* in pixels */) {
    return width * height;
}

console.log("3. Inline comments work fine!");
console.log("   calculateArea(10, 20):", calculateArea(10, 20));


// ============================================================================
// 4. COMMENTING OUT CODE
// ============================================================================

// Single-line commenting out
// var oldVariable = "This won't run";
// console.log(oldVariable);

/* Multi-line commenting out */
/*
var a = 1;
var b = 2;
var c = a + b;
console.log(c);
*/

// You can comment out individual lines in a block
var x = 10;
// var y = 20;
var z = 30;
console.log("4. Commented out code:", x, z);

// Nested block comments are NOT allowed in JavaScript
/*
   This is a block comment.
   /* This nested comment will cause a syntax error */
   //So be careful!
//*/


// ============================================================================
// 5. JSDOC COMMENTS (Documentation Comments)
// ============================================================================

/**
 * Calculates the sum of two numbers.
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
    return a + b;
}

/**
 * Represents a User.
 * @constructor
 * @param {string} name - The user's name
 * @param {number} age - The user's age
 */
function User(name, age) {
    this.name = name;
    this.age = age;
}

/**
 * @typedef {Object} Product
 * @property {string} name - Product name
 * @property {number} price - Product price
 * @property {boolean} inStock - Availability status
 */

console.log("5. JSDoc comments work fine!");
console.log("   add(5, 3):", add(5, 3));


// ============================================================================
// 6. FILE HEADER COMMENTS
// ============================================================================

/*
 * ============================================================================
 * File: example.js
 * Description: Demonstrates JavaScript comment styles
 * Author: Developer
 * Created: 2024-01-01
 * Last Modified: 2024-01-15
 * Version: 1.0.0
 * ============================================================================
 */

// Or a simpler version:
// ============================================================
// Module: Comment Examples
// Purpose: Educational examples of JS comments
// ============================================================

console.log("6. File header comments are just regular multi-line comments");


// ============================================================================
// 7. SECTION / DIVIDER COMMENTS
// ============================================================================

// ----------------------------------------------------------------------------
// SECTION: Variables
// ----------------------------------------------------------------------------
var sectionVar1 = 1;
var sectionVar2 = 2;

// ========================================
// SECTION: Functions
// ========================================
function sectionFunction() {
    return "Hello from section";
}

// ### CONFIGURATION ###
var config = {
    debug: true,
    timeout: 5000
};

console.log("7. Section divider comments help organize code");
console.log("   sectionFunction():", sectionFunction());


// ============================================================================
// 8. TODO / FIXME / NOTE / HACK COMMENTS
// ============================================================================

// TODO: Add input validation for negative numbers
function processNumber(num) {
    return num * 2;
}

// FIXME: This function returns incorrect results for edge cases
function calculateDiscount(price) {
    return price * 0.1;
}

// NOTE: This API endpoint has a rate limit of 100 requests per minute
var apiEndpoint = "https://api.example.com/data";

// HACK: Temporary workaround until backend fix is deployed
function temporaryFix(data) {
    if (!data) {
        data = {};
    }
    return data;
}

// REVIEW: Please review this logic before merging to main branch
function complexLogic() {
    return true;
}

// BUG: Known issue with Safari browser - needs polyfill
function safariCompatible() {
    return "works";
}

console.log("8. TODO/FIXME/NOTE/HACK comments are just regular comments with special prefixes");
console.log("   processNumber(5):", processNumber(5));


// ============================================================================
// 9. BEST PRACTICE: WHY, NOT WHAT
// ============================================================================

// BAD: Comments that state the obvious
var count = 0; // Set count to 0

// GOOD: Comments that explain WHY
var count = 0; // Start from 0 because the array is 0-indexed

// BAD: What the code does (code is self-explanatory)
function multiply(a, b) {
    // Multiply a by b
    return a * b;
}

// GOOD: Why this approach was chosen
function multiply(a, b) {
    // Using native operator instead of Math.multiply for performance
    return a * b;
}

// BAD: Commenting every line
var x = 10; // Set x to 10
var y = 20; // Set y to 20
var result = x + y; // Add x and y

// GOOD: Comment only when necessary
// Calculate total screen area for responsive layout
var result = x + y;

console.log("9. Best practice: Comment WHY, not WHAT");
console.log("   multiply(4, 5):", multiply(4, 5));


// ============================================================================
// 10. BEST PRACTICE: KEEP COMMENTS UP TO DATE
// ============================================================================

// BAD: Comment contradicts the code
// This function returns a string
function returnsNumber() {
    return 42; // Returns a number, not a string!
}

// GOOD: Comment matches the code
// This function returns a number
function returnsNumberCorrect() {
    return 42;
}

// BAD: Outdated comment after code changes
// Check if user is admin (old logic)
function checkUser(user) {
    // Now checks for moderator role too, but comment wasn't updated
    return user.role === "admin" || user.role === "moderator";
}

// GOOD: Updated comment
// Check if user has elevated privileges (admin or moderator)
function checkUserCorrect(user) {
    return user.role === "admin" || user.role === "moderator";
}

console.log("10. Keep comments up to date with your code!");
console.log("   returnsNumberCorrect():", returnsNumberCorrect());


// ============================================================================
// 11. BEST PRACTICE: AVOID REDUNDANT COMMENTS
// ============================================================================

// REDUNDANT: The function name is already descriptive
// This function gets the user name
function getUserName() {
    return "Alice";
}

// GOOD: Only comment if it adds value
// Returns cached user name to avoid repeated API calls
function getCachedUserName() {
    return "Alice";
}

// REDUNDANT: Variable name is self-explanatory
var userName = "Bob"; // The user's name

// GOOD: Comment explains a non-obvious choice
var userName = "Bob"; // Default name for guest users

console.log("11. Avoid redundant comments");
console.log("   getUserName():", getUserName());

// ============================================================================
// 13. COMMENTS IN DIFFERENT CONTEXTS
// ============================================================================

// Comments inside functions
function exampleFunction() {
    // This comment is inside a function
    var localVar = 10; // Local variable
    
    /*
     * This is a multi-line comment
     * inside a function body
     */
    return localVar;
}

// Comments inside objects
var user = {
    // User's first name
    firstName: "Alice",
    
    /* User's last name */
    lastName: "Smith",
    
    /**
     * Get full name
     * @returns {string} Full name
     */
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Comments inside arrays
var colors = [
    "red",    // Primary color
    "green",  // Primary color
    "blue"    // Primary color
];

// Comments in conditional blocks
if (true) {
    // This block always executes
    console.log("13. Comments inside if block");
}

// Comments in loops
for (var i = 0; i < 3; i++) {
    // Iteration number
    console.log("   Loop iteration:", i);
}

console.log("13. Comments work in all contexts");
console.log("   exampleFunction():", exampleFunction());
console.log("   user.getFullName():", user.getFullName());


// ============================================================================
// SUMMARY
// ============================================================================

/*
 * SINGLE-LINE COMMENTS:    // comment
 * MULTI-LINE COMMENTS:     /* comment */
/* JSDOC COMMENTS:          /** comment */
/* INLINE COMMENTS:         code // comment
 * COMMENTING OUT CODE:     // code or /* code */
/* FILE HEADERS:            /* file info */
/* SECTION DIVIDERS:        // === SECTION ===
 * TODO/FIXME/NOTE:         // TODO: description
 * BEST PRACTICES:
 *   - Comment WHY, not WHAT
 *   - Keep comments up to date
 *   - Avoid redundant comments
 *   - Use JSDoc for public APIs
 *   - Don't use HTML-style comments
 */

console.log("\n=== SUMMARY ===");
console.log("Single-line:      // comment");
console.log("Multi-line:       /* comment */");
console.log("JSDoc:            /** comment */");
console.log("Best practice:    Comment WHY, not WHAT");
console.log("Avoid:            HTML-style comments (legacy)");
