# Chapter 05: Literals in JavaScript

This chapter covers the different types of **literals** available in JavaScript. A literal is a notation for representing a fixed value in source code.

---

## Topics Covered

### 1. Introduction to Literals
- What are literals (fixed values in code)
- Common literal types: string, boolean, number, null, undefined
- Using the `typeof` operator to check data types

### 2. `null` vs `undefined`
- **`undefined`**: variable declared but not assigned a value; automatically set by JavaScript
- **`null`**: explicitly assigned by the developer to indicate "no value" or "empty"
- Key differences and comparisons (`==` vs `===`)
- When to use `null` and when to use `undefined`
- JavaScript quirk: `typeof null` returns `"object"`

### 3. Number Literals
- **Decimal integers** (Base 10)
- **Binary literals** (Base 2) — `0b1010`
- **Octal literals** (Base 8) — `0o77`
- **Hexadecimal literals** (Base 16) — `0xFF`
- **Floating-point numbers**
- **Exponential notation** — `1.5e3`, `1.5e-4`
- **Numeric separators** (ES2021+) — `1_000_000`
- **BigInt** — for arbitrarily large integers (`123n` or `BigInt(123)`)
- **Special numeric values**: `Infinity`, `-Infinity`, `NaN`
- **Number properties**: `MAX_VALUE`, `MIN_VALUE`, `MAX_SAFE_INTEGER`, `EPSILON`, etc.

### 4. String Literals
- Strings using **single quotes** (`'Hello'`)
- Strings using **double quotes** (`"Hello"`)
- Differences (or lack thereof) between single and double quotes
- Using `typeof` with strings

### 5. Template Literals (Backticks)
- Declaring strings with **backticks** (`` ` ``)
- **Variable interpolation** using `${variable}`
- **Expression evaluation** inside `${}` (e.g., `${10 + 20}`)
- **Multi-line strings** without escape characters
- Real-world examples: dynamic API URLs, Playwright locators, log messages, JSON payloads

### 6. Single Quote vs Double Quote vs Backtick
- Comparison table of features supported by each
- Best practices for choosing the right quote style
- Migrating from old-style string concatenation (`+`) to modern template literals

---

## Key Takeaways
- JavaScript has **one number type** (`number`), but supports multiple literal forms (decimal, binary, octal, hex, exponential).
- `null` is intentional emptiness; `undefined` means "not assigned yet."
- **Template literals** (backticks) are the modern and recommended way to build dynamic strings in JavaScript.
- Use `typeof` to inspect the data type of any literal or variable.

