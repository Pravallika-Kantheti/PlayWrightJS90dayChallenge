# Inheritance in JavaScript - Interview Prep

## What is Inheritance?

Inheritance is an **Object-Oriented Programming (OOP)** principle that allows a class (child/subclass) to **inherit properties and methods** from another class (parent/superclass).

> **Reusability:** Write once in the parent, use everywhere in the children.

In JavaScript, inheritance is achieved using the `extends` keyword.

---

## Why Inheritance?

| Without Inheritance | With Inheritance |
|---------------------|------------------|
| Duplicate code in every class | Common code in parent class |
| Hard to maintain | Easy to update - change parent once |
| No code reuse | Maximum code reuse |
| Inconsistent behavior | Consistent base behavior everywhere |

---

## Basic Syntax

```javascript
class Parent {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello, I am " + this.name);
    }
}

class Child extends Parent {
    // Child inherits everything from Parent
}

let c = new Child("Pramod");
c.greet();  // Output: Hello, I am Pramod
```

---

## The `super` Keyword

| Usage | When to Use | Example |
|-------|-------------|---------|
| `super()` | Inside **constructor** to call parent's constructor | `super(name)` |
| `super.method()` | Inside any method to call parent's method | `super.setup()` |

**Important:** If a child class has a `constructor`, it **must** call `super()` before using `this`.

---

## Types of Inheritance in JavaScript

### 1. Single Inheritance

One child extends one parent. This is the most common type.

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating");
    }
    sleep() {
        console.log(this.name + " is sleeping");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);  // Call parent constructor
        this.breed = breed;  // Add child-specific property
    }
    bark() {
        console.log(this.name + " is barking!");
    }
}

let dog = new Dog("Rex", "Labrador");
dog.eat();      // From parent
dog.sleep();    // From parent
dog.bark();     // From child
console.log(dog.breed);  // Child property
```

**File:** `179_SI.js`

---

### 2. Method Overriding

Child class redefines a parent method. The child's version is called when invoked through the child object.

```javascript
class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}

class APITest extends BaseTest {
    setup() {
        console.log("APITest: open browser");  // Overrides parent
    }
}

let test = new APITest();
test.setup();  // Output: APITest: open browser
```

**File:** `180_single_inheritance_con.js`

---

### 3. Overriding + Calling Parent Method with `super`

Use `super.method()` to call the parent's version AND add child-specific behavior.

```javascript
class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
    teardown() {
        console.log("Base: close browser");
    }
}

class UITest extends BaseTest {
    setup() {
        super.setup();              // Call parent's setup first
        console.log("UI: maximize window");  // Then add child behavior
    }
    teardown() {
        console.log("UI: take screenshot");
        super.teardown();           // Call parent's teardown last
    }
}

let test = new UITest();
test.setup();
// Output:
// Base: open browser
// UI: maximize window
```

**File:** `181_IQ1.js`

---

### 4. Hierarchical Inheritance

One parent class, multiple child classes.

```javascript
class TestCase {
    execute() {
        console.log("Running generic test");
    }
}

class UnitTest extends TestCase {
    execute() {
        super.execute();
        console.log("Running unit test — checking one function");
    }
}

class APITest extends TestCase {
    execute() {
        console.log("Running API test — sending HTTP request");
    }
}

class E2ETest extends TestCase {
    execute() {
        console.log("Running E2E test — opening browser");
    }
}

let tests = [new UnitTest(), new APITest(), new E2ETest()];
tests.forEach(test => test.execute());
```

**File:** `182_IQ2.js`

Another real-world example:

```javascript
class BasePage {
    verify() {
        console.log("Verifying base page");
    }
}

class LoginPage extends BasePage {
    verify() {
        super.verify();
        console.log("Verify: username field exists");
        console.log("Verify: password field exists");
        console.log("Verify: login button is visible");
    }
}

class DashboardPage extends BasePage {
    verify() {
        console.log("Verify: welcome message shown");
        console.log("Verify: sidebar menu loaded");
    }
}

class CartPage extends BasePage {
    verify() {
        console.log("Verify: cart items displayed");
        console.log("Verify: total price is correct");
    }
}

let pages = [new LoginPage(), new DashboardPage(), new CartPage()];
pages.forEach(page => {
    page.verify();
    console.log("---");
});
```

**File:** `183_Real_PageObject_example.js`

---

### 5. Multilevel Inheritance

A chain of inheritance: Grandparent → Parent → Child.

```javascript
class BasePage {
    constructor(name) {
        this.name = name;
    }
    open() {
        console.log("[OPEN] " + this.name);
    }
}

class AuthPage extends BasePage {
    login(user) {
        console.log("[LOGIN] " + user);
    }
}

class AdminPage extends AuthPage {
    constructor() {
        super("Admin Panel");
    }
    manageUsers() {
        console.log("[ADMIN] Managing users");
    }
}

let admin = new AdminPage();
admin.open();        // From BasePage
admin.login("superadmin");  // From AuthPage
admin.manageUsers();  // From AdminPage
```

**File:** `185_MultiLevel_Inheritance.js`

---

### 6. Multiple Inheritance

> **JavaScript does NOT support multiple inheritance.**
> A class cannot extend more than one parent class.

```javascript
class F1 {
    money() { console.log("1Cr"); }
}
class F2 {
    money() { console.log("1.5Cr"); }
}

// class Son extends F1, F2 { }  // SyntaxError
// class Son extends F1 extends F2 { }  // SyntaxError
```

**Alternative:** Use **Composition** or **Mixins** instead.

**File:** `184_Multiple_Inheritance.js`

---

## Hierarchical Inheritance Structure (Empty Example)

```javascript
class Father {
    // Common base
}

class Son1 extends Father {
    // Child 1
}

class Son2 extends Father {
    // Child 2
}
```

**File:** `186_Hierarchial_inheritance.js`

---

## Key Rules Summary

| Rule | Explanation |
|------|-------------|
| `extends` keyword | Creates inheritance relationship |
| `super()` in constructor | **Must** be called if child has constructor |
| `super()` timing | Must be called **before** `this` in child constructor |
| `super.method()` | Calls parent method from child method |
| Method overriding | Child method with same name overrides parent |
| No multiple inheritance | JS classes can only `extends` one class |
| Private fields (`#`) | Not inherited by subclasses |

---

## Common Interview Questions

### Q1: What is inheritance in JavaScript?
**A:** Inheritance allows a class to acquire properties and methods from another class using the `extends` keyword. It promotes code reusability.

### Q2: What is the role of `super()`?
**A:** `super()` calls the parent class's constructor. It is mandatory in a child's constructor if the child defines its own constructor, and it must be called before using `this`.

### Q3: What is method overriding?
**A:** When a child class defines a method with the same name as the parent, the child's version overrides the parent's version. The child's method is called when invoked through a child object.

### Q4: How do you call a parent method from an overridden child method?
**A:** Use `super.methodName()`. For example: `super.setup()`.

### Q5: Does JavaScript support multiple inheritance?
**A:** No. A class can only `extends` one parent class. For multiple behaviors, use composition or mixins.

### Q6: What is multilevel inheritance?
**A:** A class extends a class that itself extends another class, creating a chain: A → B → C.

### Q7: What is hierarchical inheritance?
**A:** One parent class has multiple child classes. Example: `Animal` is parent of `Dog`, `Cat`, `Bird`.

### Q8: What happens if you don't call `super()` in a child constructor?
**A:** JavaScript throws a **ReferenceError**: Must call super constructor in derived class before accessing 'this'.

---

## Files in This Chapter

| File | Topic |
|------|-------|
| `178_Single_Inheritance.js` | Basic single inheritance (BasePage → LoginPage) |
| `179_SI.js` | Single inheritance with constructor (Animal → Dog) |
| `180_single_inheritance_con.js` | Method overriding example |
| `181_IQ1.js` | Overriding + `super.method()` call |
| `182_IQ2.js` | Hierarchical inheritance (TestCase → UnitTest/APITest/E2ETest) |
| `183_Real_PageObject_example.js` | Real-world Page Object Model with inheritance |
| `184_Multiple_Inheritance.js` | Multiple inheritance (not supported in JS) |
| `185_MultiLevel_Inheritance.js` | Multilevel inheritance (BasePage → AuthPage → AdminPage) |
| `186_Hierarchial_inheritance.js` | Hierarchical structure example |

---

## Quick Checklist

- [x] Use `extends` to create child class
- [x] Call `super()` in child constructor before `this`
- [x] Use `super.method()` to call parent version
- [x] Child can override parent methods
- [x] JS does not support multiple class inheritance
- [x] Use mixins/composition for multiple behaviors
- [x] Multilevel: `A → B → C` chain
- [x] Hierarchical: One parent, many children
