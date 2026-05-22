# Chapter 10: Loops in JavaScript

This chapter covers the different types of loops in JavaScript and how they help us execute a block of code multiple times.

---

## 1. `for` Loop

A `for` loop is used when you know exactly how many times you want to repeat a block of code.

### Syntax
```javascript
for (initialization; condition; increment/decrement) {
    // code to be executed
}
```

### How it works
1. **Initialization**: Runs once before the loop starts (e.g., `let i = 0`).
2. **Condition**: Checked before every iteration. If `true`, the loop runs; if `false`, it stops.
3. **Increment/Decrement**: Runs after every iteration (e.g., `i++`).

### Example
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // prints 0, 1, 2, 3, 4
}
```

### Interview Question
What happens if the condition is **false from the start**?
```javascript
for (let pramod = 0; pramod > 1; pramod++) {
    console.log(pramod); // never runs
}
```
**Answer**: The loop body never executes.

### Tricky Example: Conditional Logic inside a Loop
```javascript
for (let somya = 0; somya < 18; somya++) {
    if (somya > 15) {
        console.log("Dad needs to give iPhone to Somya");
    } else {
        console.log("Somya is still a kid, only Barbie dolls for her");
    }
}
```

### Infinite Loop Warning
```javascript
for (let i = 0; ; i++) {
    console.log(i);
} // infinite loop because no condition is provided
```

---

## 2. `while` Loop

A `while` loop is used when you want to repeat code **as long as a condition is true**, and you may not know exactly how many times it will run.

### Syntax
```javascript
while (condition) {
    // code to be executed
}
```

### Example
```javascript
let attempt = 0;
while (attempt < 5) {
    console.log("Attempt number: " + attempt);
    attempt++;
}
```

### Tricky Example: Powers of 2
```javascript
let number = 1;
while (number < 100) {
    console.log(number);
    number *= 2; // 1, 2, 4, 8, 16, 32, 64
}
```

### Common Pitfall: Infinite Loop
```javascript
let x = 0;
while (x < 5) {
    console.log(x);
    // x++; // ❌ Missing increment causes infinite loop
}
```

### Another Pitfall: Condition False from Start
```javascript
let y = 10;
while (y < 10) {
    console.log(y);
    y++;
}
// ❌ Body never runs because y is already 10
```

---

## 3. `do...while` Loop

A `do...while` loop is similar to `while`, but it **guarantees the code runs at least once** because the condition is checked **after** the loop body.

### Syntax
```javascript
do {
    // code to be executed
} while (condition);
```

### Example
```javascript
let count = 0;
do {
    console.log(count);
    count++;
} while (count < 5);
```

### Real-World Example: Retry Logic
```javascript
let retry = 0;
do {
    console.log("Attempt number: " + retry);
    retry++;
} while (retry < 5);
```

---

## 4. `continue` Statement

The `continue` statement skips the **current iteration** and moves to the next one.

### Example: Print Only Odd Numbers
```javascript
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // skip even numbers
    }
    console.log(i); // 1, 3, 5, 7, 9
}
```

### Example: Skip a Specific Value
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) continue; // skip when i is 5
    console.log(i); // 0, 1, 2, 3, 4, 6, 7, 8, 9
}
```

---

## 5. Important Interview Questions & Tricky Scenarios

### IQ 1: Countdown using `while`
```javascript
let y = 5;
while (y > 0) {
    console.log(y); // 5, 4, 3, 2, 1
    y--;
}
```

### IQ 2: `do...while` with a false condition
```javascript
let y = 0;
do {
    console.log(y); // prints 0 at least once
    y--;
} while (y > 0);
```
**Key Takeaway**: The body runs **once** even if the condition is false initially.

### IQ 3: `while` loop with false condition
```javascript
let count = 10;
while (count < 5) {
    console.log(count); // never runs
    count++;
}
```
**Key Takeaway**: `while` checks the condition **before** running, so the body may never execute.

### IQ 4: Infinite `do...while`
```javascript
let n = 1;
do {
    console.log(n);
} while (n < 5); // ❌ infinite loop because n is never incremented
```

---

## Quick Comparison

| Loop Type | When to Use | Condition Check | Minimum Executions |
|-----------|-------------|-----------------|--------------------|
| `for` | Known number of iterations | Before | 0 |
| `while` | Unknown iterations, condition-based | Before | 0 |
| `do...while` | Must run at least once | After | 1 |

---

## File Reference

| File | Topic |
|------|-------|
| `67_For_loop.js` | Introduction to `for` loop |
| `68_For_loop.js` | Basic `for` loop example |
| `69_IQ_for_loop.js` | Tricky `for` loop questions |
| `70_While_loop.js` | Introduction to `while` loop |
| `71_Do_While.js` | Introduction to `do...while` loop |
| `72_IQ.js` | Countdown `while` loop |
| `73_IQ.js` | `do...while` with false condition |
| `74_IQ.js` | `continue` statement |
| `75_IQ.js` | `while` with false condition & infinite `do...while` warning |
