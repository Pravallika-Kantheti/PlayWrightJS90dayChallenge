// ============================================================
// JavaScript Identifier Rules - Comprehensive Examples
// ============================================================

console.log("=== VALID IDENTIFIERS ===");

// Rule 1: Must start with a letter (A-Z, a-z), underscore (_), or dollar sign ($)
var myVariable = 10;
console.log("Letter start:", myVariable); // 10

var _privateVar = 20;
console.log("Underscore start:", _privateVar); // 20

var $element = 30;
console.log("Dollar sign start:", $element); // 30

// Rule 2: Subsequent characters can be letters, digits, underscores, or dollar signs
var var123 = 40;
console.log("Letters + digits:", var123); // 40

var my_var = 50;
console.log("Underscore in middle:", my_var); // 50

var my$var = 60;
console.log("Dollar in middle:", my$var); // 60

var a1b2c3 = 70;
console.log("Mixed alphanumeric:", a1b2c3); // 70

var user_name$1 = 80;
console.log("Complex valid identifier:", user_name$1); // 80

// Rule 3: Case-sensitive
var user = "Alice";
var User = "Bob";
var USER = "Charlie";
console.log("Case-sensitive - user:", user);   // Alice
console.log("Case-sensitive - User:", User);   // Bob
console.log("Case-sensitive - USER:", USER);   // Charlie

// Rule 4: Unicode letters are allowed (though not recommended for readability)
var π = 3.14159;
console.log("Unicode letter (π):", π); // 3.14159

var café = "coffee";
console.log("Unicode letter (café):", café); // coffee

// Rule 5: Unicode escape sequences are allowed
var \u0041 = "letter A using escape";
console.log("Unicode escape (\\u0041):", \u0041); // letter A using escape


console.log("\n=== INVALID IDENTIFIERS (Uncomment to see errors) ===");

// INVALID: Cannot start with a digit
// var 1stPlace = "gold";     // SyntaxError: Invalid or unexpected token
// var 123abc = 100;          // SyntaxError: Invalid or unexpected token

// INVALID: Cannot contain spaces
// var my var = 10;           // SyntaxError: Unexpected identifier
// var user name = "John";    // SyntaxError: Unexpected identifier

// INVALID: Cannot contain hyphens (parsed as subtraction operator)
// var my-var = 20;           // SyntaxError: Unexpected token '-'
// var user-name = "Jane";    // SyntaxError: Unexpected token '-'

// INVALID: Cannot contain special characters
// var my@var = 30;           // SyntaxError: Invalid or unexpected token
// var user#name = "Tom";     // SyntaxError: Invalid or unexpected token
// var total% = 50;           // SyntaxError: Invalid or unexpected token
// var price! = 60;           // SyntaxError: Invalid or unexpected token
// var rate& = 70;            // SyntaxError: Invalid or unexpected token

// INVALID: Cannot be reserved words / keywords
// var var = 10;              // SyntaxError: Unexpected token 'var'
// var function = 20;         // SyntaxError: Unexpected token 'function'
// var class = 30;            // SyntaxError: Unexpected token 'class'
// var return = 40;           // SyntaxError: Unexpected token 'return'
// var if = 50;               // SyntaxError: Unexpected token 'if'
// var while = 60;            // SyntaxError: Unexpected token 'while'
// var for = 70;              // SyntaxError: Unexpected token 'for'
// var const = 80;            // SyntaxError: Unexpected token 'const'
// var let = 90;              // SyntaxError: Unexpected token 'let'
// var break = 100;           // SyntaxError: Unexpected token 'break'
// var continue = 110;        // SyntaxError: Unexpected token 'continue'
// var switch = 120;          // SyntaxError: Unexpected token 'switch'
// var case = 130;            // SyntaxError: Unexpected token 'case'
// var default = 140;         // SyntaxError: Unexpected token 'default'
// var try = 150;             // SyntaxError: Unexpected token 'try'
// var catch = 160;           // SyntaxError: Unexpected token 'catch'
// var finally = 170;         // SyntaxError: Unexpected token 'finally'
// var throw = 180;           // SyntaxError: Unexpected token 'throw'
// var new = 190;             // SyntaxError: Unexpected token 'new'
// var this = 200;            // SyntaxError: Unexpected token 'this'
// var true = 210;            // SyntaxError: Unexpected token 'true'
// var false = 220;           // SyntaxError: Unexpected token 'false'
// var null = 230;            // SyntaxError: Unexpected token 'null'
// var undefined = 240;       // SyntaxError: Unexpected token 'undefined'

// INVALID: Cannot use these in strict mode (reserved for future use)
// var interface = 10;        // SyntaxError in strict mode
// var implements = 20;       // SyntaxError in strict mode
// var package = 30;          // SyntaxError in strict mode
// var private = 40;          // SyntaxError in strict mode
// var protected = 50;        // SyntaxError in strict mode
// var public = 60;           // SyntaxError in strict mode
// var static = 70;           // SyntaxError in strict mode
// var yield = 80;            // SyntaxError in strict mode
// var enum = 90;             // SyntaxError in strict mode
// var await = 100;           // SyntaxError in strict mode (inside async functions/modules)


console.log("\n=== BEST PRACTICES ===");

// Use camelCase for variable and function names
var userName = "Alice";
var totalAmount = 150.50;
var isActive = true;
console.log("camelCase examples:", userName, totalAmount, isActive);

// Use PascalCase for class names (constructor functions)
var MyClass = function() {};
console.log("PascalCase example:", typeof MyClass);

// Use UPPER_SNAKE_CASE for constants
var MAX_SIZE = 100;
var PI = 3.14159;
console.log("Constant examples:", MAX_SIZE, PI);

// Use descriptive names (avoid single letters except in loops)
var firstName = "John";
var lastName = "Doe";
var age = 30;
console.log("Descriptive names:", firstName, lastName, age);

// Avoid starting with underscore unless indicating private/internal
var _internalCount = 0;
console.log("Internal variable:", _internalCount);

// Avoid starting with dollar sign unless working with jQuery/Angular or DOM libraries
var $button = "jquery-style";
console.log("Library convention:", $button);

console.log("\n=== SUMMARY ===");
console.log("Valid: letters, digits, _, $ (cannot start with digit)");
console.log("Invalid: spaces, hyphens, special characters, reserved words");
console.log("Case-sensitive: myVar, MyVar, and MYVAR are all different");
console.log("Best practice: Use camelCase for variables and functions");
