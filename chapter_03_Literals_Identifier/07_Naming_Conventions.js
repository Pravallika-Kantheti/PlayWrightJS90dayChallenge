// ============================================================
// JavaScript Naming Conventions - Valid Examples
// Following JavaScript Identifier Rules
// ============================================================

console.log("=== 1. CAMEL CASE (most common for variables & functions) ===");

// First word lowercase, subsequent words capitalized
var firstName = "Alice";
var lastName = "Smith";
var totalAmount = 150.50;
var isUserActive = true;
var getUserName = function() { return firstName + " " + lastName; };
var calculateTotalPrice = function(price, tax) { return price + tax; };

console.log("firstName:", firstName);
console.log("lastName:", lastName);
console.log("totalAmount:", totalAmount);
console.log("isUserActive:", isUserActive);
console.log("getUserName():", getUserName());
console.log("calculateTotalPrice(100, 10):", calculateTotalPrice(100, 10));


console.log("\n=== 2. PASCAL CASE (used for classes & constructors) ===");

// Every word starts with uppercase letter
var Person = function(name, age) {
    this.name = name;
    this.age = age;
};

var CustomerOrder = function(orderId, items) {
    this.orderId = orderId;
    this.items = items;
};

var HttpRequest = function(url, method) {
    this.url = url;
    this.method = method;
};

var user1 = new Person("Bob", 25);
var order1 = new CustomerOrder("ORD123", ["item1", "item2"]);
var request1 = new HttpRequest("/api/users", "GET");

console.log("Person instance:", user1.name, user1.age);
console.log("CustomerOrder instance:", order1.orderId, order1.items);
console.log("HttpRequest instance:", request1.url, request1.method);


console.log("\n=== 3. UPPER SNAKE CASE (used for constants) ===");

// All uppercase with underscores between words
var MAX_USERS = 100;
var API_BASE_URL = "https://api.example.com";
var DEFAULT_TIMEOUT = 5000;
var PI = 3.14159;
var VERSION_NUMBER = "2.0.1";
var ERROR_MESSAGE = "Something went wrong";

console.log("MAX_USERS:", MAX_USERS);
console.log("API_BASE_URL:", API_BASE_URL);
console.log("DEFAULT_TIMEOUT:", DEFAULT_TIMEOUT);
console.log("PI:", PI);
console.log("VERSION_NUMBER:", VERSION_NUMBER);
console.log("ERROR_MESSAGE:", ERROR_MESSAGE);


console.log("\n=== 4. LOWER SNAKE CASE (sometimes used in object keys / configs) ===");

// All lowercase with underscores between words
var user_name = "Charlie";
var email_address = "charlie@example.com";
var created_at = new Date().toISOString();
var is_verified = true;
var total_score = 95;

console.log("user_name:", user_name);
console.log("email_address:", email_address);
console.log("created_at:", created_at);
console.log("is_verified:", is_verified);
console.log("total_score:", total_score);


console.log("\n=== 5. HUNGARIAN NOTATION (prefix indicates type) ===");

// Prefix with type abbreviation
var strName = "Diana";          // str = string
var nAge = 30;                  // n = number
var bIsAdmin = false;           // b = boolean
var arrItems = [1, 2, 3];       // arr = array
var objUser = { id: 1 };        // obj = object
var fnCallback = function() {}; // fn = function

console.log("strName:", strName);
console.log("nAge:", nAge);
console.log("bIsAdmin:", bIsAdmin);
console.log("arrItems:", arrItems);
console.log("objUser:", objUser);
console.log("fnCallback type:", typeof fnCallback);


console.log("\n=== 6. PREFIX / SUFFIX CONVENTIONS ===");

// Boolean variables with 'is', 'has', 'can', 'should' prefix
var isVisible = true;
var hasPermission = false;
var canEdit = true;
var shouldRetry = false;
var isEnabled = true;

console.log("isVisible:", isVisible);
console.log("hasPermission:", hasPermission);
console.log("canEdit:", canEdit);
console.log("shouldRetry:", shouldRetry);
console.log("isEnabled:", isEnabled);

// Arrays & collections with plural names
var users = ["Alice", "Bob", "Charlie"];
var productList = ["Laptop", "Mouse", "Keyboard"];
var orderItems = [{ id: 1 }, { id: 2 }];
var errorMessages = ["Error 1", "Error 2"];

console.log("users:", users);
console.log("productList:", productList);
console.log("orderItems:", orderItems);
console.log("errorMessages:", errorMessages);

// Counters with numeric suffix
var attemptCount = 0;
var retryCount = 3;
var maxRetries = 5;
var pageNumber = 1;
var itemIndex = 0;

console.log("attemptCount:", attemptCount);
console.log("retryCount:", retryCount);
console.log("maxRetries:", maxRetries);
console.log("pageNumber:", pageNumber);
console.log("itemIndex:", itemIndex);


console.log("\n=== 7. SINGLE LETTER (valid but limited use cases) ===");

// Commonly used in loops and iterators
var i = 0;    // index
var j = 1;    // secondary index
var k = 2;    // tertiary index
var x = 10;   // coordinate / unknown
var y = 20;   // coordinate / unknown

console.log("i:", i);
console.log("j:", j);
console.log("k:", k);
console.log("x:", x);
console.log("y:", y);


console.log("\n=== 8. UNDERSCORE PREFIX (private / internal) ===");

// Convention to indicate private or internal use
var _internalCounter = 0;
var _privateMethod = function() { return "private"; };
var _config = { debug: true };
var _cache = {};

console.log("_internalCounter:", _internalCounter);
console.log("_privateMethod():", _privateMethod());
console.log("_config:", _config);
console.log("_cache:", _cache);


console.log("\n=== 9. DOLLAR SIGN PREFIX (library / DOM element) ===");

// Convention in jQuery, Angular, or DOM references
var $button = "#submit-btn";
var $input = "#username";
var $modal = "#myModal";
var $container = ".container";

console.log("$button:", $button);
console.log("$input:", $input);
console.log("$modal:", $modal);
console.log("$container:", $container);


console.log("\n=== 10. DESCRIPTIVE & MEANINGFUL NAMES ===");

// Avoid abbreviations when possible, be descriptive
var customerEmailAddress = "customer@example.com";
var numberOfActiveUsers = 42;
var productUnitPrice = 29.99;
var shippingAddressLine1 = "123 Main St";
var shippingAddressLine2 = "Apt 4B";
var orderCreationTimestamp = new Date().toISOString();

console.log("customerEmailAddress:", customerEmailAddress);
console.log("numberOfActiveUsers:", numberOfActiveUsers);
console.log("productUnitPrice:", productUnitPrice);
console.log("shippingAddressLine1:", shippingAddressLine1);
console.log("shippingAddressLine2:", shippingAddressLine2);
console.log("orderCreationTimestamp:", orderCreationTimestamp);


console.log("\n=== 11. ABBREVIATIONS & ACRONYMS ===");

// Use consistently: treat as words in camelCase / PascalCase
var htmlContent = "<div>Hello</div>";
var xmlParser = "XMLParser";
var urlString = "https://example.com";
var apiKey = "abc123";
var domElement = "div";
var cssClass = "highlight";
var httpStatus = 200;
var jsonData = '{"key": "value"}';

console.log("htmlContent:", htmlContent);
console.log("xmlParser:", xmlParser);
console.log("urlString:", urlString);
console.log("apiKey:", apiKey);
console.log("domElement:", domElement);
console.log("cssClass:", cssClass);
console.log("httpStatus:", httpStatus);
console.log("jsonData:", jsonData);


console.log("\n=== 12. NESTED OBJECT PROPERTIES (using valid identifiers) ===");

var userProfile = {
    firstName: "Emma",
    lastName: "Watson",
    emailAddress: "emma@example.com",
    isSubscribed: true,
    accountSettings: {
        themeColor: "dark",
        fontSize: 14,
        showNotifications: true
    },
    billingInfo: {
        cardNumber: "****1234",
        expiryDate: "12/25",
        billingAddress: {
            streetLine1: "456 Oak Ave",
            streetLine2: "Suite 100",
            cityName: "New York",
            zipCode: "10001"
        }
    }
};

console.log("userProfile.firstName:", userProfile.firstName);
console.log("userProfile.emailAddress:", userProfile.emailAddress);
console.log("userProfile.accountSettings.themeColor:", userProfile.accountSettings.themeColor);
console.log("userProfile.billingInfo.billingAddress.cityName:", userProfile.billingInfo.billingAddress.cityName);


console.log("\n=== SUMMARY OF CONVENTIONS ===");
console.log("camelCase      -> variables, functions (firstName, getUserName)");
console.log("PascalCase     -> classes, constructors (Person, CustomerOrder)");
console.log("UPPER_SNAKE    -> constants (MAX_USERS, API_BASE_URL)");
console.log("lower_snake    -> object keys, configs (user_name, created_at)");
console.log("is/has/can     -> booleans (isActive, hasPermission, canEdit)");
console.log("plural names   -> arrays & collections (users, orderItems)");
console.log("_prefix        -> private/internal (_privateMethod, _config)");
console.log("$prefix        -> DOM/library elements ($button, $input)");
