# Chapter 06: Operators in JavaScript

This chapter covers the various **operators** available in JavaScript. An operator is a symbol that performs an operation on one or more operands (values/variables).

---

## Topics Covered

### 1. Introduction to Operators
- What is an operator?
- The **assignment operator** (`=`)

### 2. Arithmetic Operators
- Addition (`+`), Subtraction (`-`), Multiplication (`*`), Division (`/`)
- Modulus/Remainder (`%`)
- Using modulus for even/odd checks
- **Compound assignment operators**: `+=`, `-=`, `*=`, `/=`, `%=`

### 3. Exponential Operator
- Exponentiation (`**`) — e.g., `2 ** 3` equals `8`
- Using variables and expressions with `**`

### 4. Increment and Decrement Operators
- **Prefix increment** (`++a`) — increments before returning the value
- **Postfix increment** (`a++`) — returns the value before incrementing
- **Prefix decrement** (`--a`) and **Postfix decrement** (`a--`)
- Complex expressions with multiple increment/decrement operations

### 5. Comparison Operators
- Equal to (`==`)
- Strict equal to (`===`)
- Not equal to (`!=`)
- Strict not equal to (`!==`)
- Greater than (`>`), Less than (`<`)
- Greater than or equal to (`>=`), Less than or equal to (`<=`)

### 6. Strict (`===`) vs Loose (`==`) Equality
- **Loose equality** performs type coercion before comparison
- **Strict equality** checks both value and type (recommended)
- Common coercion examples: `0 == ""`, `1 == true`, `null == undefined`
- Transitivity issues with loose equality
- Special cases: `NaN`, `+0` vs `-0`, empty strings, arrays, objects

### 7. Confusing Comparisons & Interview Gotchas
- Deep dive into JavaScript coercion rules
- `null` and `undefined` equality behavior
- `NaN` is never equal to anything (use `Number.isNaN()`)
- `+0` vs `-0` (use `Object.is()` to distinguish)
- Boolean coercion traps
- Object and array coercion to primitives
- `typeof null` returns `"object"` (historical bug)
- `Object.is()` for SameValue comparison
- Recommendations: always prefer `===` and `!==`

### 8. Logical Operators
- **Logical AND** (`&&`)
- **Logical OR** (`||`)
- **Logical NOT** (`!`)

### 9. String Concatenation
- Using `+` to concatenate strings
- Type coercion when mixing strings and numbers
- Compound concatenation with `+=`

### 10. Ternary (Conditional) Operator
- Syntax: `condition ? exprIfTrue : exprIfFalse`
- Nested ternary operators for multiple conditions
- Real-world examples: grades, API URLs, HTTP status codes, day of week mapping

### 11. Type Operators
- **`typeof`** — returns the data type of a value (string, number, boolean, object, function, undefined, symbol, bigint)
- **`instanceof`** — checks if an object is an instance of a specific class or constructor

### 12. Nullish Coalescing Operator (`??`)
- Returns the right-hand operand when the left is `null` or `undefined`
- Difference from `||` (OR) — `??` only checks `null`/`undefined`, not other falsy values like `0` or `""`
- Providing default values safely

### 13. Practice Tasks
- Finding the maximum of two and three numbers using the ternary operator
- Solving complex increment/decrement expressions

---

## Key Takeaways
- Prefer **strict equality (`===` and `!==`)** over loose equality to avoid unexpected type coercion.
- Understand the difference between **prefix** and **postfix** increment/decrement — the order of evaluation matters.
- Use **`??`** (nullish coalescing) when you want to provide defaults only for `null`/`undefined`, not all falsy values.
- **`typeof`** is great for primitive types, but use **`instanceof`** for checking custom objects and classes.
- Be cautious with JavaScript's coercion rules during comparisons — especially with arrays, objects, `NaN`, and `null`.

