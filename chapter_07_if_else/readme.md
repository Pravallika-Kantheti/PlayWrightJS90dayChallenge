# Chapter 07: if-else Statements in JavaScript

This chapter covers **control flow** using `if`, `else if`, and `else` statements in JavaScript. These statements allow you to execute different blocks of code based on conditions.

---

## Topics Covered

### 1. Introduction to Statements
- What is a statement in JavaScript?
- Types of statements: declarations, expressions, and control flow statements

### 2. Basic if-else Statement
- Syntax and structure of `if-else`
- Executing a block of code when a condition is **true**
- Executing an alternative block when the condition is **false**
- Example: checking if a person is an adult or minor

### 3. if-else if-else Ladder
- Using multiple conditions with `else if`
- Checking a series of conditions sequentially
- Example: grading system (A, B, C, D, F)

### 4. Nested if Statements
- Placing `if` statements inside other `if` blocks
- Checking multiple related conditions
- Example: login system with role-based access (admin, editor, viewer)

### 5. Real-World Examples with if-else
- **API Response Handling** — checking HTTP status codes (200, 400, 401, 403, 404, 500)
- **Login Systems** — validating username, password, and account lock status
- **Role-Based Access Control** — granting permissions based on user roles

### 6. Truthy and Falsy Values
- Understanding which values are treated as `true` (truthy) and `false` (falsy) in conditions
- **Truthy values**: non-empty strings, non-zero numbers, arrays `[]`, objects `{}`
- **Falsy values**: `0`, `""` (empty string), `null`, `undefined`, `NaN`, `false`
- Common interview questions on truthy/falsy evaluations
- Using truthy checks for variable existence

### 7. Practice Tasks
- **Even or Odd** — using the modulus operator (`%`) with `if-else`
- **Student Grade** — classifying scores into grades (A, B, C, D, F)
- **Leap Year** — checking divisibility by 4, 100, and 400
- **HTTP Status Code Categorizer** — grouping status codes (Success, Redirection, Client Error, Server Error)
- **Test Case Pass/Fail Verdict** — comparing expected vs actual values
- **Bug Severity Classifier** — classifying bugs by impact score (Critical, High, Medium, Low)
- **Build Health Reporter** — reporting build health based on test pass percentage
- **Login Lockout After Failed Attempts** — warning and locking accounts after retries

---

## Key Takeaways
- The `if-else` statement is the foundation of **conditional logic** in JavaScript.
- `else if` allows you to check **multiple conditions** in a sequence.
- **Nested `if`** blocks help when conditions depend on each other.
- Always understand **truthy and falsy** values — they can cause unexpected behavior in conditions.
- Use `if-else` chains to handle real-world scenarios like API responses, login validations, and classification systems.

