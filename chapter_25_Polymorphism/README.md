# Polymorphism in JavaScript - Interview Prep

## What is Polymorphism?

Polymorphism is an **Object-Oriented Programming (OOP)** principle that means:
> **"Many forms"** - The ability of a method, object, or variable to take on **multiple forms**.

In simple terms: **The same method name behaves differently based on the object that calls it.**

---

## Why Polymorphism?

| Without Polymorphism | With Polymorphism |
|---------------------|------------------|
| Write separate code for each type | One interface, multiple implementations |
| Hard to extend with new types | Easy to add new types without changing existing code |
| Tight coupling between code | Loose coupling, flexible design |
| Code duplication | Clean, reusable code |

---

## Types of Polymorphism in JavaScript

### 1. Method Overriding (Runtime Polymorphism)

Child class **redefines** a parent method. The method that gets called depends on the **actual object's class** at runtime.

```javascript
class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}

class APIPage extends BaseTest {
    setup() {
        console.log("APITest: open browser");  // Overriding parent method
    }
}

let test = new APIPage();
test.setup();  // Output: APITest: open browser (child's version called)
```

**File:** `191_Method_Overriding.js`

**Key Point:** The method call is determined at **runtime** based on the actual object type.

---

### 2. Method Overloading (Compile-time Polymorphism) - NOT Native in JS

In languages like Java/C++, you can define multiple methods with the **same name but different parameters**. JavaScript does **NOT** support true method overloading.

However, we can simulate it using:

```javascript
class Calculator {
    // Simulating method overloading with default/rest parameters
    add(a, b, c) {
        if (c !== undefined) {
            return a + b + c;  // 3 arguments
        }
        return a + b;  // 2 arguments
    }
}

let calc = new Calculator();
console.log(calc.add(5, 10));        // 15 (2 args)
console.log(calc.add(5, 10, 20));     // 35 (3 args)
```

**Alternative using rest parameters:**
```javascript
class Calculator {
    add(...numbers) {
        return numbers.reduce((sum, num) => sum + num, 0);
    }
}

let calc = new Calculator();
console.log(calc.add(5, 10));              // 15
console.log(calc.add(5, 10, 20, 30));      // 65
```

---

### 3. Polymorphism with Arrays (Duck Typing)

Different objects responding to the **same method call** in their own way.

```javascript
class Dog {
    speak() {
        return "Woof!";
    }
}

class Cat {
    speak() {
        return "Meow!";
    }
}

class Duck {
    speak() {
        return "Quack!";
    }
}

// Polymorphic array - all have speak() method
let animals = [new Dog(), new Cat(), new Duck()];

animals.forEach(animal => {
    console.log(animal.speak());  // Same method call, different results
});

// Output:
// Woof!
// Meow!
// Quack!
```

---

### 4. Real-World Example: Test Automation Framework

```javascript
class TestCase {
    execute() {
        console.log("Running generic test setup");
    }
    
    getType() {
        return "Generic";
    }
}

class UITest extends TestCase {
    execute() {
        console.log("Running UI Test: Opening browser, clicking elements");
    }
    
    getType() {
        return "UI";
    }
}

class APITest extends TestCase {
    execute() {
        console.log("Running API Test: Sending HTTP requests, validating JSON");
    }
    
    getType() {
        return "API";
    }
}

class PerformanceTest extends TestCase {
    execute() {
        console.log("Running Performance Test: Load testing, measuring response times");
    }
    
    getType() {
        return "Performance";
    }
}

// Polymorphic behavior - same interface, different implementations
function runTest(testCase) {
    console.log(`\n--- ${testCase.getType()} Test ---`);
    testCase.execute();
}

// Run all tests using the same interface
runTest(new UITest());
runTest(new APITest());
runTest(new PerformanceTest());
```

**Output:**
```
--- UI Test ---
Running UI Test: Opening browser, clicking elements

--- API Test ---
Running API Test: Sending HTTP requests, validating JSON

--- Performance Test ---
Running Performance Test: Load testing, measuring response times
```

---

### 5. Polymorphism with Function Arguments

```javascript
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    
    getArea() {
        return 0.5 * this.base * this.height;
    }
}

// Polymorphic function - works with any shape
function printArea(shape) {
    console.log(`Area: ${shape.getArea()}`);
}

printArea(new Rectangle(10, 5));    // Area: 50
printArea(new Circle(5));           // Area: 78.54...
printArea(new Triangle(10, 5));     // Area: 25
```

---

### 6. Using `super` for Extended Behavior

Sometimes you want to **extend** parent behavior, not completely replace it.

```javascript
class BasePage {
    verify() {
        console.log("Base: Verifying page title");
    }
}

class LoginPage extends BasePage {
    verify() {
        super.verify();  // Call parent's verify first
        console.log("Login: Verifying username field");
        console.log("Login: Verifying password field");
        console.log("Login: Verifying login button");
    }
}

class DashboardPage extends BasePage {
    verify() {
        super.verify();
        console.log("Dashboard: Verifying welcome message");
        console.log("Dashboard: Verifying navigation menu");
    }
}

// Polymorphic usage
let pages = [new LoginPage(), new DashboardPage()];
pages.forEach(page => {
    console.log("---");
    page.verify();
});
```

**Output:**
```
---
Base: Verifying page title
Login: Verifying username field
Login: Verifying password field
Login: Verifying login button
---
Base: Verifying page title
Dashboard: Verifying welcome message
Dashboard: Verifying navigation menu
```

---

## Key Interview Points

| Concept | Description |
|---------|-------------|
| **Method Overriding** | Child redefines parent's method - runtime decision |
| **Duck Typing** | "If it walks like a duck and talks like a duck..." - JS doesn't care about class, only about methods |
| **Liskov Substitution** | Child objects should be substitutable for parent objects |
| **Open/Closed Principle** | Open for extension, closed for modification |

---

## Common Interview Questions

### Q1: What is polymorphism?
**A:** Polymorphism means "many forms." It allows methods to do different things based on the object it is acting upon. In JS, it's mainly achieved through method overriding.

### Q2: Does JavaScript support method overloading?
**A:** No, JavaScript does not support true method overloading like Java/C++. However, we can simulate it using default parameters, rest parameters, or checking arguments inside the function.

### Q3: What is duck typing?
**A:** Duck typing is a concept where an object's suitability is determined by the presence of certain methods and properties, rather than the type of the object itself. "If it looks like a duck and quacks like a duck, it's a duck."

### Q4: Difference between overriding and overloading?
**A:** 
- **Overriding:** Same method name, same parameters, different implementation in child class (runtime polymorphism)
- **Overloading:** Same method name, different parameters, different implementations (compile-time polymorphism) - NOT native in JS

### Q5: How is polymorphism useful in test automation?
**A:** We can have a base `TestCase` class and different test types (UI, API, Performance) that override the `execute()` method. The test runner can treat all tests uniformly while each type executes differently.

---

## Files in This Chapter

| File | Description |
|------|-------------|
| `191_Method_Overriding.js` | Basic method overriding example |
| `192_Duck_Typing.js` | Duck typing with different animal classes |
| `193_Test_Framework_Poly.js` | Polymorphism in test automation framework |
| `194_Shape_Polymorphism.js` | Shapes with different area calculations |
| `195_PageObject_Polymorphism.js` | Page Object Model with super and overriding |
| `196_Method_Overloading_Simulated.js` | Simulating method overloading in JS |

---

## Quick Checklist

- [x] Polymorphism = "Many forms"
- [x] Method overriding is the main form in JS
- [x] Method overloading is NOT natively supported in JS
- [x] Duck typing allows different objects to respond to same method call
- [x] Polymorphism enables loose coupling and flexible design
- [x] Real-world use: Test frameworks, UI components, payment gateways

---

## Practice Exercises

### Exercise 1: Payment Gateway
Create a `PaymentGateway` base class and child classes for `CreditCard`, `PayPal`, and `UPI`. Each should have a `processPayment(amount)` method that behaves differently.

### Exercise 2: Notification System
Create a `Notification` base class and child classes for `EmailNotification`, `SMSNotification`, and `PushNotification`. Each should have a `send(message)` method.

### Exercise 3: Browser Driver
Create a `BrowserDriver` base class with `open()`, `close()`, and `takeScreenshot()` methods. Create child classes for `ChromeDriver`, `FirefoxDriver`, and `EdgeDriver` that override these methods.
