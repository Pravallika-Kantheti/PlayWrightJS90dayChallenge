# TypeScript Interface & Abstraction - Interview Prep

## What is an Interface?

An **Interface** in TypeScript is a **contract** that defines the shape of an object. It specifies what properties and methods an object must have, without providing implementation.

> Think of it as a **blueprint** or a **template** that classes or objects must follow.

```typescript
interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

let test1: TestCase = {
    id: 1,
    name: "Login with valid credentials",
    status: "PASS",
    duration: 1500
};
```

**File:** `201_IF.ts`

---

## Interface vs Type

| Feature | Interface | Type |
|---------|-----------|------|
| Declaration | `interface` keyword | `type` keyword |
| Merging | ✅ Can be merged (extended multiple times) | ❌ Cannot be merged |
| Extends | ✅ Can extend other interfaces | ❌ Cannot extend |
| Unions | ❌ Cannot use unions | ✅ Can use unions (`string \| number`) |
| Primitives | ❌ Cannot define primitive types | ✅ Can define primitive types |
| Objects | ✅ Best for object shapes | ✅ Also works for objects |
| Performance | ✅ Faster in type checking | Slightly slower |

**Recommendation:** Use `interface` for object shapes and OOP. Use `type` for unions, tuples, and primitives.

---

## Interface Declaration

### Basic Interface

```typescript
interface User {
    name: string;
    age: number;
    email: string;
}

let user: User = {
    name: "John",
    age: 30,
    email: "john@example.com"
};
```

### Optional Properties (`?`)

```typescript
interface TestCase {
    id: number;
    name: string;
    status: string;
    description?: string;  // Optional
    tags?: string[];         // Optional
}

let tc1: TestCase = {
    id: 1,
    name: "Login Test",
    status: "PASS"
    // description and tags are not required
};
```

### Readonly Properties (`readonly`)

```typescript
interface Config {
    readonly apiUrl: string;
    readonly timeout: number;
    env: string;  // Not readonly - can be modified
}

let config: Config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    env: "staging"
};

config.env = "production";      // ✅ OK
// config.apiUrl = "other";     // ❌ Error: readonly property
```

### Methods in Interface

```typescript
interface TestRunner {
    run(testName: string): void;
    stop(): void;
    getResults(): string[];
}

let playwrightRunner: TestRunner = {
    run(testName) {
        console.log(`Running: ${testName}`);
    },
    stop() {
        console.log("Stopping test execution");
    },
    getResults() {
        return ["PASS", "FAIL", "PASS"];
    }
};
```

---

## Interface with Classes (implements)

When a class **implements** an interface, it MUST provide all properties and methods defined in the interface.

```typescript
interface IBrowser {
    open(url: string): void;
    close(): void;
    takeScreenshot(): string;
}

class ChromeBrowser implements IBrowser {
    open(url: string): void {
        console.log(`Chrome opening: ${url}`);
    }
    
    close(): void {
        console.log("Chrome closing");
    }
    
    takeScreenshot(): string {
        return "chrome-screenshot.png";
    }
}

class FirefoxBrowser implements IBrowser {
    open(url: string): void {
        console.log(`Firefox opening: ${url}`);
    }
    
    close(): void {
        console.log("Firefox closing");
    }
    
    takeScreenshot(): string {
        return "firefox-screenshot.png";
    }
}

// Polymorphic usage
let browsers: IBrowser[] = [
    new ChromeBrowser(),
    new FirefoxBrowser()
];

browsers.forEach(browser => browser.open("https://example.com"));
```

---

## Interface Inheritance (extends)

Interfaces can extend other interfaces, creating a hierarchy.

```typescript
interface BaseTest {
    id: number;
    name: string;
}

interface UITest extends BaseTest {
    selector: string;
    action: "click" | "fill" | "hover";
}

interface APITest extends BaseTest {
    endpoint: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
}

let uiTest: UITest = {
    id: 1,
    name: "Button Click Test",
    selector: "#submit-btn",
    action: "click"
};

let apiTest: APITest = {
    id: 2,
    name: "User Creation API",
    endpoint: "/api/users",
    method: "POST"
};
```

---

## What is Abstraction?

**Abstraction** is an OOP principle that hides complex implementation details and shows only essential features.

> **Think of it like a car dashboard** - you see the steering wheel and speedometer, but not the engine internals.

In TypeScript, abstraction is achieved through:
1. **Interfaces** - Define what must be done
2. **Abstract Classes** - Define what must be done + provide partial implementation

---

## Abstract Classes

An **abstract class** is a class that:
- **Cannot be instantiated** directly
- **Can have abstract methods** (no implementation)
- **Can have concrete methods** (with implementation)
- **Must be extended** by child classes

```typescript
abstract class BasePage {
    // Abstract method - MUST be implemented by child
    abstract verify(): void;
    
    // Abstract property - MUST be implemented by child
    abstract pageUrl: string;
    
    // Concrete method - CAN be used as-is
    navigate(): void {
        console.log(`Navigating to: ${this.pageUrl}`);
    }
    
    // Concrete method
    takeScreenshot(): string {
        return `screenshot-${Date.now()}.png`;
    }
}

class LoginPage extends BasePage {
    pageUrl: string = "/login";
    
    verify(): void {
        console.log("Verifying login page elements");
        console.log("- Username field exists");
        console.log("- Password field exists");
        console.log("- Login button is visible");
    }
}

class DashboardPage extends BasePage {
    pageUrl: string = "/dashboard";
    
    verify(): void {
        console.log("Verifying dashboard elements");
        console.log("- Welcome message displayed");
        console.log("- Navigation menu loaded");
    }
}

let login = new LoginPage();
login.navigate();     // Output: Navigating to: /login
login.verify();       // Output: Verifying login page elements...
```

---

## Interface vs Abstract Class

| Feature | Interface | Abstract Class |
|---------|-----------|----------------|
| **Instantiation** | ❌ Cannot create instance | ❌ Cannot create instance |
| **Implementation** | ❌ No implementation allowed | ✅ Can have concrete methods |
| **Properties** | ✅ Can declare properties | ✅ Can declare and initialize |
| **Access Modifiers** | ❌ No modifiers (all public) | ✅ Supports `public`, `private`, `protected` |
| **Multiple Inheritance** | ✅ Class can implement multiple | ❌ Class can extend only one |
| **Constructor** | ❌ No constructor | ✅ Has constructor |
| **Usage** | Define shape/contract | Partial implementation + contract |
| **When to Use** | Pure contract, multiple shapes | Shared code + required methods |

---

## Access Modifiers with Abstraction

```typescript
abstract class TestFramework {
    // Public - accessible everywhere
    public testName: string;
    
    // Protected - accessible in this class and subclasses
    protected testData: object;
    
    // Private - accessible only in this class
    private logs: string[] = [];
    
    constructor(name: string) {
        this.testName = name;
        this.testData = {};
    }
    
    // Public abstract method
    abstract execute(): void;
    
    // Protected concrete method
    protected log(message: string): void {
        this.logs.push(message);
        console.log(`[${this.testName}] ${message}`);
    }
    
    // Public concrete method
    public getLogs(): string[] {
        return [...this.logs];  // Return copy
    }
}

class UIAutomationTest extends TestFramework {
    execute(): void {
        this.log("Opening browser");  // ✅ Protected access
        this.log("Performing UI actions");
        this.testData = { browser: "Chrome" };  // ✅ Protected access
        // this.logs.push("test");  // ❌ Private - cannot access
    }
}
```

---

## Practical Example: Test Automation Framework

```typescript
// Interface - Contract for all browsers
interface IBrowser {
    launch(): void;
    close(): void;
    goto(url: string): void;
}

// Abstract Class - Base functionality + required methods
abstract class BaseTest {
    protected browser: IBrowser;
    protected testName: string;
    
    constructor(browser: IBrowser, name: string) {
        this.browser = browser;
        this.testName = name;
    }
    
    // Abstract - MUST be implemented
    abstract runTest(): void;
    
    // Concrete - shared functionality
    setup(): void {
        console.log(`\n===== ${this.testName} =====`);
        this.browser.launch();
    }
    
    teardown(): void {
        this.browser.close();
        console.log(`===== End ${this.testName} =====\n`);
    }
    
    // Template method pattern
    execute(): void {
        this.setup();
        this.runTest();
        this.teardown();
    }
}

// Concrete implementations
class LoginTest extends BaseTest {
    runTest(): void {
        this.browser.goto("/login");
        console.log("Testing login functionality...");
    }
}

class CheckoutTest extends BaseTest {
    runTest(): void {
        this.browser.goto("/checkout");
        console.log("Testing checkout flow...");
    }
}

// Mock browser implementation
class PlaywrightBrowser implements IBrowser {
    launch(): void { console.log("Playwright: Launching browser"); }
    close(): void { console.log("Playwright: Closing browser"); }
    goto(url: string): void { console.log(`Playwright: Navigating to ${url}`); }
}

// Usage
let browser = new PlaywrightBrowser();
let tests: BaseTest[] = [
    new LoginTest(browser, "Login Test"),
    new CheckoutTest(browser, "Checkout Test")
];

tests.forEach(test => test.execute());
```

**Output:**
```
===== Login Test =====
Playwright: Launching browser
Playwright: Navigating to /login
Testing login functionality...
Playwright: Closing browser
===== End Login Test =====

===== Checkout Test =====
Playwright: Launching browser
Playwright: Navigating to /checkout
Testing checkout flow...
Playwright: Closing browser
===== End Checkout Test =====
```

---

## Interface with Function Types

```typescript
// Interface for a function signature
interface Calculator {
    (a: number, b: number): number;
}

let add: Calculator = (a, b) => a + b;
let multiply: Calculator = (a, b) => a * b;

console.log(add(5, 10));        // 15
console.log(multiply(5, 10));   // 50
```

---

## Indexable Interface

```typescript
interface ErrorMessages {
    [code: number]: string;  // Index signature
}

let errors: ErrorMessages = {
    404: "Not Found",
    500: "Server Error",
    401: "Unauthorized"
};

console.log(errors[404]);  // "Not Found"
```

---

## Common Interview Questions

### Q1: What is the difference between Interface and Type?
**A:** 
- **Interface:** Can be extended/merged, better for object shapes, OOP patterns
- **Type:** Can create unions, tuples, primitive aliases, better for complex type compositions

### Q2: What is the difference between Interface and Abstract Class?
**A:**
- **Interface:** Pure contract, no implementation, multiple can be implemented
- **Abstract Class:** Can have implementation, constructor, access modifiers, only single inheritance

### Q3: When to use Interface vs Abstract Class?
**A:**
- Use **Interface** when defining a contract that multiple unrelated classes should follow
- Use **Abstract Class** when sharing code between related classes and enforcing some methods

### Q4: Can an Interface extend a Class?
**A:** **Yes!** In TypeScript, an interface can extend a class to inherit its members (but not implementation).

```typescript
class Animal {
    name: string = "";
}

interface Dog extends Animal {
    breed: string;
}
```

### Q5: What is the `implements` keyword?
**A:** `implements` is used by a class to guarantee it follows an interface contract. The class must implement all properties and methods declared in the interface.

### Q6: What are access modifiers in TypeScript?
**A:**
- `public` - Accessible everywhere (default)
- `private` - Accessible only within the class
- `protected` - Accessible within class and subclasses

### Q7: What is the Template Method Pattern?
**A:** A design pattern where an abstract class defines the skeleton of an algorithm, with some steps deferred to subclasses. Achieved using abstract and concrete methods together.

---

## Files in This Chapter

| File | Description |
|------|-------------|
| `201_IF.ts` | Basic interface with TestCase example |

---

## Quick Checklist

- [x] Interface defines a contract/shape
- [x] `implements` - class MUST follow interface
- [x] `extends` - interface/class can inherit
- [x] Optional properties with `?`
- [x] Readonly properties with `readonly`
- [x] Abstract class cannot be instantiated
- [x] Abstract methods have no body
- [x] Abstract class can have concrete methods
- [x] Access modifiers: public, private, protected
- [x] Interface vs Abstract Class - know when to use each
- [x] Template Method Pattern with abstract classes

---

## Practice Exercises

### Exercise 1: Create an Interface
Create an `IVehicle` interface with properties: `brand`, `model`, `year` and methods: `start()`, `stop()`.

### Exercise 2: Implement the Interface
Create `Car` and `Bike` classes that implement `IVehicle`.

### Exercise 3: Abstract Class
Create an abstract `Shape` class with abstract method `getArea()`. Create `Rectangle`, `Circle`, `Triangle` classes.

### Exercise 4: Template Method Pattern
Create an abstract `DataProcessor` with template method `process()`. Create `CSVProcessor` and `JSONProcessor`.

### Exercise 5: Multiple Interfaces
Create `IPrintable` and `ISerializable` interfaces. Make a `Report` class implement both.

---

> **"Interfaces define what you must do. Abstract classes define what you must do AND how to do some of it."**
