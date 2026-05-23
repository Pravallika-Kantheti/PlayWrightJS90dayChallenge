# Chapter 10: Loops in JavaScript

This chapter covers the different types of **loops** available in JavaScript — `for`, `while`, and `do-while`. Loops allow you to execute a block of code repeatedly based on a condition.

---

## Topics Covered

### 1. Introduction to the For Loop
- What is a `for` loop?
- The three parts of a `for` loop: **initialization**, **condition**, and **increment/decrement**
- Syntax: `for (init; condition; update) { // code }`
- Basic example: printing numbers from 0 to 4

### 2. For Loop Examples
- Simple iteration using a `for` loop
- Understanding how the loop variable changes with each iteration

### 3. For Loop Interview Questions & Tricky Scenarios
- What happens when the condition is **never true**? (loop body never executes)
- **Infinite loops** — forgetting the increment/decrement
- Using `if-else` statements **inside** a `for` loop for conditional logic

### 4. Introduction to the While Loop
- What is a `while` loop?
- Syntax: `while (condition) { // code }`
- Example: retry attempts with a counter
- Tricky example: doubling a number until it exceeds a limit
- Common mistake: **infinite loop** when the increment is forgotten
- What happens when the condition is **false from the start**? (loop body never executes)

### 5. Introduction to the Do-While Loop
- What is a `do-while` loop?
- Syntax: `do { // code } while (condition);`
- The loop body **always executes at least once**, even if the condition is initially false
- Example: counting with `do-while`
- Example: retry attempts that execute at least once

### 6. While Loop Practice
- Countdown example using a `while` loop with decrement

### 7. Do-While Loop Practice
- Understanding the **execute-first, check-later** behavior
- Example where the loop runs once even though the condition starts as false

### 8. The `continue` Statement
- What is `continue`?
- Skipping the current iteration and moving to the next one
- Example: printing only odd numbers by skipping even ones
- Example: skipping a specific value (e.g., skip number 5)

### 9. Loop Condition Pitfalls
- `while` loop with a false initial condition — body never runs
- Danger of **infinite `do-while` loops** when the update statement is missing

### 10. Practice Tasks
- **Triangle Classifier** — using `if-else` to classify triangles as equilateral, isosceles, or scalene based on side lengths
- **FizzBuzz** — classic loop problem using `for` and `if-else` to print:
  - "FizzBuzz" for multiples of 3 and 5
  - "Fizz" for multiples of 3
  - "Buzz" for multiples of 5
  - The number itself for all other cases

---

## Key Takeaways
- Use a **`for` loop** when you know the number of iterations in advance.
- Use a **`while` loop** when the number of iterations depends on a dynamic condition.
- Use a **`do-while` loop** when the loop body **must execute at least once** before the condition is checked.
- Always ensure your loop has a proper **termination condition** to avoid infinite loops.
- The **`continue` statement** skips the rest of the current iteration and moves to the next one.
- Be careful with loop variable updates — forgetting to increment/decrement is the most common cause of infinite loops.

