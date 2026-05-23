# Chapter 08: Switch Statements in JavaScript

This chapter covers the **switch statement** in JavaScript — a control flow structure that executes different blocks of code based on the value of an expression. It is often used as a cleaner alternative to multiple `if-else` statements.

---

## Topics Covered

### 1. Introduction to Switch Statement
- What is a switch statement?
- Syntax and structure: `switch`, `case`, `break`, and `default`
- How the expression is evaluated and matched against case values
- Example: printing the day of the week based on a string value

### 2. The break Statement
- Purpose of `break` inside a switch block
- What happens when `break` is **omitted** — **fall-through behavior**
- Fall-through can be intentional or a common source of bugs

### 3. No-break / Fall-Through Behavior
- Demonstrating how execution continues into subsequent cases without `break`
- Understanding when fall-through occurs and its consequences

### 4. The default Case
- Using `default` as a catch-all when no case matches
- Example: handling invalid or misspelled input values

### 5. Real-World Examples
- **HTTP Status Code Handler** — mapping status codes (200, 400, 401, 403, 404, 500) to messages
- Practical use cases in API testing and automation

### 6. Grouping Cases
- Combining multiple `case` labels for a single block of code
- Example: grouping Chromium-based browsers (Chrome, Edge, Brave, Opera)
- Useful for categorizing similar values under one action

### 7. Interview Questions & Tricky Scenarios
- **Fall-through surprise** — predicting output when `break` is missing
- **Switch with boolean expressions** — using `switch(true)` for range checks (e.g., grading scores)
- **Duplicate case values** — understanding why duplicate cases cause errors with `let`
- **Type sensitivity** — `switch` uses **strict equality (`===`)**, so `5` and `"5"` are different
- The `0` vs `false` quirk in switch cases

---

## Key Takeaways
- The `switch` statement is a cleaner alternative to long `if-else` chains when comparing a single expression against multiple values.
- Always include `break` at the end of each case unless **intentional fall-through** is desired.
- Use the `default` case to handle unexpected or unmatched values gracefully.
- You can **group multiple cases** together to share the same block of code.
- Remember that `switch` uses **strict equality (`===`)** for comparisons — type matters!
- Be cautious with `let` declarations inside cases due to block scoping rules.

