# Chapter 09: User Input in JavaScript

This chapter covers different ways to **accept and handle user input** in JavaScript, from browser-based prompts to Node.js command-line interfaces.

---

## Topics Covered

### 1. Introduction to User Input
- What is user input?
- Why user input is essential for interactive programs
- Different methods to collect input: browser dialogs, command-line, forms, GUIs

### 2. Browser-Based Input with `prompt()`
- Using the built-in `prompt()` function to display a dialog box
- `prompt()` always returns a **string**
- Handling the **Cancel** button — `prompt()` returns `null`
- Converting string input to numbers using `Number()`
- Validating input with `isNaN()` — "Is this Not a Number?"
- Example: accepting a number and checking if it's even or odd
- Example: validating numeric input and handling cancellation

### 3. Node.js Input with `readline` Module
- Using the built-in `readline` module in Node.js
- Creating an interface with `readline.createInterface()`
- Setting `input` to `process.stdin` and `output` to `process.stdout`
- Using `rl.question()` to prompt the user asynchronously
- Converting and validating the input
- Closing the readline interface with `rl.close()`

### 4. Node.js Input with `prompt-sync` Package
- Installing and using the third-party `prompt-sync` package
- Creating a synchronous prompt with `require('prompt-sync')()`
- Converting input directly to a number using `Number(prompt(...))`
- Validating numeric input and handling null/cancelled input

---

## Key Takeaways
- Browser-based `prompt()` is simple but always returns a **string** — remember to convert to numbers when needed.
- Always validate user input using functions like `isNaN()` or manual checks before processing.
- In **Node.js**, use the built-in `readline` module for asynchronous input, or `prompt-sync` for synchronous input.
- Handle **cancellation** (when the user clicks Cancel or presses Escape) by checking for `null`.
- Converting input: use `Number()`, `parseInt()`, or `parseFloat()` depending on your needs.

