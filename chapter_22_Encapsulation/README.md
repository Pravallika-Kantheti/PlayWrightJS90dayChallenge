# Encapsulation in JavaScript - Interview Prep

## What is Encapsulation?

Encapsulation is an **Object-Oriented Programming (OOP)** principle that means:
> **Bundling data (variables) and methods (functions) together, and restricting direct access to some of the object's components.**

In simple terms: **Hide the sensitive data and expose only what is necessary through controlled methods (getters/setters).**

---

## Why Encapsulation?

| Problem Without Encapsulation | Solution With Encapsulation |
|------------------------------|----------------------------|
| Anyone can modify data directly | Data is hidden (private) |
| No validation on data changes | Controlled access via methods |
| Code is fragile and easy to break | Code is protected and maintainable |
| Hard to debug | Clear control points for data flow |

---

## Encapsulation in JavaScript

JavaScript supports encapsulation using **Private Fields** with the `#` prefix (introduced in ES2022).

### Syntax

```javascript
class ClassName {
    #privateField;        // Private field - cannot be accessed from outside

    constructor(value) {
        this.#privateField = value;
    }

    // Getter method - controlled read access
    getPrivateField() {
        return this.#privateField;
    }

    // Setter method - controlled write access
    setPrivateField(newValue) {
        // You can add validation here
        this.#privateField = newValue;
    }
}
```

---

## Key Points for Interviews

1. **`#` makes a field truly private** - Unlike the old `_convention` (which was just a naming convention), `#` is enforced by JavaScript. Trying to access `obj.#field` from outside throws a **SyntaxError**.

2. **Private fields must be declared** - You cannot create them dynamically inside methods. They must be declared at the class body level.

3. **Methods can access private fields** - Any method inside the class can read/write `#fields`.

4. **Subclasses cannot access parent private fields** - Private fields are private to the class that declares them.

---

## Example 1: Bank Account

```javascript
class BankAccount {
    #balance = 0;  // Private field

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance;  // Controlled access
    }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance());  // Output: 100

// console.log(account.#balance);  // SyntaxError: Private field must be declared
// console.log(account.balance);   // undefined
```

---

## Example 2: Person with Validation

```javascript
class Person {
    #child1;
    #child2;

    constructor(name, ch1, ch2) {
        this.name = name;        // Public
        this.#child1 = ch1;      // Private
        this.#child2 = ch2;      // Private
    }

    getChild1() {
        return this.#child1;
    }

    setChild1(changed_name) {
        this.#child1 = changed_name;
    }
}

let p = new Person("Pramod", "Vrad", "Jenny");
console.log(p.name);            // OK - public
console.log(p.getChild1());     // OK - controlled access
// console.log(p.#child1);      // Error - private
```

---

## Example 3: Car Engine

```javascript
class Car {
    #engine;  // Private

    constructor(name, engineName) {
        this.name = name;        // Public
        this.#engine = engineName;
    }

    getEngine() {
        return this.#engine;
    }

    setEngine(nameEngine) {
        this.#engine = nameEngine;
    }
}

let tesla = new Car("Tesla", "V8");
console.log(tesla.getEngine());   // V8
tesla.setEngine("V9");
console.log(tesla.getEngine());   // V9
```

---

## Example 4: Bank with Role-Based Access

```javascript
class ICICI {
    #balance;

    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed");
        }
    }
}

let pramod = new ICICI("Pramod", 1000);
console.log(pramod.getBalance());          // 1000
pramod.setBalance(10000000, false);          // Not allowed
console.log(pramod.getBalance());            // Still 1000

pramod.setBalance(3000, true);               // Allowed (cashier)
console.log(pramod.getBalance());            // 3000
```

---

## Common Interview Questions

### Q1: What is encapsulation in JavaScript?
**A:** Encapsulation is the practice of hiding internal object details and exposing only necessary parts through public methods. In JS, we use `#` for private fields.

### Q2: Difference between `private` (TypeScript) and `#` (JavaScript)?
**A:** `private` in TypeScript is compile-time only - at runtime the field is still accessible. `#` in JavaScript is enforced at runtime by the engine itself.

### Q3: Can subclasses access parent private fields?
**A:** No. Private fields declared with `#` are strictly private to the class that defines them. Even subclasses cannot access them.

### Q4: Why not just use closures for privacy?
**A:** Closures work but are harder to scale for complex classes. `#` fields provide true privacy with cleaner class syntax and better performance.

### Q5: What happens if I try to access `#field` from outside?
**A:** JavaScript throws a **SyntaxError** immediately. It is not just `undefined` - it is a hard error.

---

## Files in This Chapter

| File | Description |
|------|-------------|
| `174_Encapsulation.js` | Basic BankAccount with private balance |
| `175_Real_ex.js` | Person class hiding child names |
| `176_encap_car.js` | Car class with private engine |
| `177_ecap_bank.js` | Bank with role-based setter validation |
| `task.js` | Practice task |

---

## Quick Checklist

- [x] Use `#fieldName` for private fields
- [x] Declare private fields at class level
- [x] Provide public getters/setters for controlled access
- [x] Add validation in setters when needed
- [x] Never access `#field` directly from outside the class
