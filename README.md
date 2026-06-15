# learnPlayWright2x

> **Daily Learning Workspace for Modern QA Automation**
> Mastering JavaScript, TypeScript, Playwright & AI-Powered Testing

---

## About This Repository

This is a **hands-on learning workspace** where concepts are practiced daily. Each chapter contains focused examples, exercises, and real-world patterns progressing from language fundamentals to advanced test automation.

**Learning Path:** JavaScript -> TypeScript -> Playwright -> Modern QA (AI Agents & MCP)

---

## Learning Roadmap

| Phase | Topic | Status |
|-------|-------|--------|
| **01** | JavaScript Fundamentals | In Progress |
| **02** | TypeScript Mastery | Upcoming |
| **03** | Playwright Automation | Upcoming |
| **04** | Modern QA & AI Agents | Upcoming |

---

## Repository Structure

```
learnPlayWright2x/
|-- chapter_01_Basics/                          # Day 1 - Environment & Setup
|-- chapter_02_JavaScript_Concepts/               # var, let, const basics
|-- chapter_03_Literals_Identifier/               # Identifier rules, naming, comments
|-- chapter_04_JavaScript Concepts/               # var vs let vs const, hoisting, scope
|-- chapter_05_Literal/                           # Literals, typeof, null vs undefined
|-- chapter_06_Opeartor/                          # Arithmetic, comparison, logical, ternary
|-- chapter_07_if_else/                           # if-else, else-if ladder, truthy/falsy
|-- Chapter_08_Switch/                            # switch, case, break, default
|-- chapter_09_User_Input/                        # prompt, readline, prompt-sync
|-- chapter_10_Loops/                             # for, while, do-while, continue
|-- chapter_11_Arrays/                            # Array creation, methods, iteration
|-- chapter_12_Functions/                           # Function types, expressions, arrow functions
|-- chapter_13_Strings/                             # String methods, searching, transformation, conversion
|-- chapter_14_Objects/                             # Object basics, creation, properties, methods, spread
|-- chapter_15_2D_Array.js/                       # 2D arrays, matrices, grid iteration, patterns
|-- chapter_16_Callback_Fn/                       # Callback functions, sync vs async, callback hell
|-- README.md                                     # You are here!
```

---

## Phase 01: JavaScript Fundamentals

> **Goal:** Build rock-solid understanding of JavaScript before applying it to automation.

### Chapter 01: Basics
- **Environment Setup** - Verifying Node.js installation
- **First JavaScript Program** - `console.log()` and basic syntax
- **Node.js Platform Info** - `process.platform`, `process.arch`, `process.version`
- **Hot Code** - Function definitions and loop execution

### Chapter 02: JavaScript Concepts
- **Variable Declaration** - `var` basics and reassignment
- Introduction to JavaScript runtime and execution

### Chapter 03: Literals & Identifiers
- **Identifier Rules** - Valid/invalid naming, reserved words, case-sensitivity
- **Naming Conventions** - camelCase, PascalCase, UPPER_SNAKE_CASE, Hungarian notation
- **Comments** - Single-line, multi-line, JSDoc, best practices

### Chapter 04: JavaScript Core Concepts
- **var vs let vs const** - Declaration, reassignment, and redeclaration differences
- **Function Scope** - How `var` behaves inside functions
- **Block Scope** - How `let` and `const` are confined to blocks
- **Hoisting** - Variable and function hoisting behavior
- **Temporal Dead Zone (TDZ)** - Accessing variables before declaration with `let`/`const`

### Chapter 05: Literals
- **Types of Literals** - String, boolean, number, null, undefined
- **`typeof` Operator** - Checking data types at runtime
- **`null` vs `undefined`** - Differences, comparisons, and when to use each
- **Number Literals** - Decimal, binary, octal, hex, exponential, BigInt, special values
- **String Literals** - Single quotes, double quotes, backticks (template literals)
- **Template Literals** - Variable interpolation, multi-line strings, real-world examples

### Chapter 06: Operators
- **Assignment Operator** - `=`
- **Arithmetic Operators** - `+`, `-`, `*`, `/`, `%`, compound assignments
- **Exponential Operator** - `**`
- **Increment/Decrement** - Prefix and postfix forms
- **Comparison Operators** - `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Strict vs Loose Equality** - Type coercion, common gotchas, interview questions
- **Logical Operators** - `&&`, `||`, `!`
- **String Concatenation** - Using `+` and `+=` with strings
- **Ternary Operator** - `condition ? true : false`, nested ternaries
- **Type Operators** - `typeof`, `instanceof`
- **Nullish Coalescing** - `??` operator for default values

### Chapter 07: if-else Statements
- **Basic if-else** - Single condition execution
- **else-if Ladder** - Multiple sequential conditions
- **Nested if** - Conditions inside conditions
- **Truthy & Falsy Values** - Understanding implicit boolean conversions
- **Real-World Examples** - API responses, login systems, role-based access
- **Practice Tasks** - Even/odd, grades, leap year, HTTP status codes, bug severity

### Chapter 08: Switch Statements
- **Switch Syntax** - `switch`, `case`, `break`, `default`
- **The `break` Statement** - Preventing fall-through behavior
- **Fall-Through Behavior** - When `break` is omitted
- **The `default` Case** - Catch-all for unmatched values
- **Grouping Cases** - Multiple cases sharing the same block
- **Interview Questions** - Tricky scenarios, type sensitivity, `switch(true)` pattern

### Chapter 09: User Input
- **`prompt()`** - Browser-based input dialogs
- **`readline` Module** - Node.js asynchronous input
- **`prompt-sync`** - Node.js synchronous input
- **Input Validation** - Converting strings to numbers, handling cancellation

### Chapter 10: Loops
- **For Loop** - Initialization, condition, increment/decrement
- **While Loop** - Condition-based repetition
- **Do-While Loop** - Execute at least once before checking condition
- **The `continue` Statement** - Skipping iterations
- **Infinite Loops** - Common pitfalls and how to avoid them
- **Practice Tasks** - Triangle classifier, FizzBuzz

### Chapter 11: Arrays
- **Array Creation** - Array literals, `new Array()`, `Array.of()`, `Array.from()`
- **Accessing Elements** - Index-based access, `at()` method, modifying elements
- **Adding & Removing Elements** - `push()`, `pop()`, `shift()`, `unshift()`, `splice()`
- **Searching Methods** - `indexOf()`, `lastIndexOf()`, `includes()`, `find()`, `findIndex()`, `findLast()`, `findLastIndex()`
- **Iteration** - `for`, `for...of`, `forEach()`, `for...in`
- **Transformation Methods** - `map()`, `filter()`, `reduce()`, `flat()`
- **Real-World Examples** - Browser lists, test results, score grading

### Chapter 12: Functions
- **What is a Function** - Reusable block of code, function vs method
- **Function Declaration** - Using `function` keyword, calling functions
- **Type 1: No Parameters, No Return** - Simple functions performing tasks
- **Type 2: With Parameters, No Return** - Passing arguments, parameters vs arguments
- **Type 3: No Parameters, With Return** - Returning values without input
- **Type 4: With Parameters, With Return** - Full input/output functions
- **Template Literals in Functions** - Using backticks for dynamic string output
- **Function Expressions** - Assigning functions to variables
- **Arrow Functions** - ES6 concise syntax, implicit returns, single parameter shorthand
- **Default Parameters** - Providing default values for function parameters
- **Rest Parameters** - Handling variable number of arguments with `...rest`
- **Spread Operator** - Expanding arrays into function arguments with `...`
- **Function Scope** - Global vs local scope, nested scope, lexical scope
- **Closures** - Functions retaining access to their outer scope, counter pattern
- **Higher-Order Functions** - Functions that take or return other functions
- **Pure Functions** - Predictable functions with no side effects
- **IIFE (Immediately Invoked Function Expressions)** - Self-executing anonymous functions
- **Interview Questions** - Function hoisting, variable scope, return behavior, tricky scenarios
- **API Real-World Examples** - Retry tracker pattern, test automation use cases

### Chapter 13: Strings
- **String Basics** - Single quotes, double quotes, backticks (template literals), multiline strings
- **String Constructor** - `String()` wrapper, converting values to strings
- **String Properties** - `length`, index access (`[]`), `at()`, `charAt()`, `charCodeAt()`
- **Searching & Checking** - `includes()`, `startsWith()`, `endsWith()`, `indexOf()`, `lastIndexOf()`, `search()`
- **Extracting Substrings** - `slice()` (supports negatives), `substring()` (no negatives)
- **Transforming Strings** - `toUpperCase()`, `toLowerCase()`, `trim()`, `trimStart()`, `trimEnd()`
- **Replacing Text** - `replace()`, `replaceAll()`, regex with `/g` flag
- **Splitting & Joining** - `split()` to array, `join()` back to string
- **String Concatenation** - `+`, `+=`, `concat()`, template literals
- **String Conversion** - `toString()`, `Number()`, `parseInt()`, `parseFloat()`
- **Cheat Sheet** - Quick reference for all common string methods and gotchas

### Chapter 14: Objects
- **Object Basics** - Empty object `{}`, key-value pairs, object vs JSON
- **Object Creation** - Object literal syntax, dot notation, bracket notation
- **Property Access** - `obj.key`, `obj["key"]`, dynamic property access with variables
- **Adding & Modifying Properties** - Assigning new properties, updating existing values
- **Deleting Properties** - `delete` operator to remove properties
- **Primitive vs Reference Types** - Value copy vs reference copy, mutation behavior
- **Object Methods** - Functions inside objects (`add()`, `subtract()`), shorthand method syntax
- **Getters & Setters** - `get` and `set` keywords for computed properties, `this` keyword
- **Object Destructuring** - Basic destructuring, renaming variables, default values, nested destructuring
- **Spread Operator with Objects** - Shallow copy (`{...obj}`), merging objects, `let` vs `const` with objects
- **Object Utility Methods** - `Object.keys()`, `Object.values()`, `Object.entries()`, `Object.getOwnPropertyDescriptor()`
- **Object Iteration** - `for...in` loop, iterating with `Object.keys/values/entries`
- **Real-World Examples** - Test config objects, ENV config, API expected responses, nested data structures
- **Interview Questions** - Object comparison, reference equality, property descriptors, mutation behavior

### Chapter 15: 2D Arrays
- **2D Array Basics** - Grid and matrix structure, rows and columns
- **Element Access** - Nested index access (`grid[i][j]`), dimensions (`grid.length`, `grid[0].length`)
- **Iteration** - Nested `for` loops, `for...of`, `forEach` for 2D arrays
- **Array Methods with 2D** - `map()` and `reduce()` for row-wise operations
- **Filtering Data** - Searching and filtering elements across rows/columns
- **Real-World Examples** - Test result matrices, suite pass/fail tracking, score grids
- **Pattern Printing** - Right triangle star patterns using nested loops

### Chapter 16: Callback Functions
- **What is a Callback** - Function passed as argument to another function
- **Callback Syntax** - Named function, anonymous function, and arrow function callbacks
- **Synchronous Callbacks** - Blocking execution (`forEach`, custom sync flows)
- **Asynchronous Callbacks** - Non-blocking execution (`setTimeout`, API simulation)
- **Callback with Parameters** - Passing data and arguments through callbacks
- **Callback with Return Values** - Using callback results in parent functions
- **Callback Hell (Pyramid of Doom)** - Nested callbacks, real-world QA automation flow example
- **Real-World Examples** - Playwright `test()` callback pattern, login flow automation, API response handling

---

## How to Run JS Files

```bash
# Navigate to any chapter folder
cd chapter_01_Basics

# Run a file with Node.js
node 01_Basics.js
node 02_JS.js

# Or run from the root
node chapter_06_Opeartor/30_Operator.js
```

---

## Phase 02: TypeScript Mastery

> **Goal:** Type-safe automation code with TypeScript.

### Planned Topics

- **Types & Interfaces** - Primitives, custom types, object shapes
- **Enums & Unions** - Literal types, discriminated unions
- **Generics** - Reusable type-safe functions and classes
- **Access Modifiers** - `public`, `private`, `protected`, `readonly`
- **Decorators** - Metadata, class/method decorators
- **TS Config & Compilation** - `tsconfig.json`, strict mode

---

## Phase 03: Playwright Automation

> **Goal:** Build robust, maintainable, and scalable test suites.

### Planned Topics

- **Setup & Configuration** - Installation, project config, browsers
- **Locators** - CSS, XPath, text, role-based, filtering, chaining
- **Actions** - Click, type, scroll, upload, hover, drag-and-drop
- **Assertions** - Auto-retrying assertions, soft assertions, custom matchers
- **Fixtures** - Test isolation, custom fixtures, dependency injection
- **Page Object Model (POM)** - Scalable architecture, base pages, components
- **API Testing** - Request contexts, mocking, authentication
- **Debugging** - Trace viewer, inspector, headed mode, screenshots/videos
- **Reporting** - HTML reports, Allure, CI integration
- **CI/CD** - GitHub Actions, Docker, parallel execution, sharding

---

## Phase 04: Modern QA - AI Agents & MCP

> **Goal:** Leverage AI and modern tooling for full STLC automation.

### Planned Topics

- **Playwright CLI** - Codegen, test runner options, codegen with AI
- **AI Agents** - Self-healing locators, intelligent test generation, autonomous testing
- **MCP (Model Context Protocol)** - AI-assisted debugging, context-aware test creation
- **STLC Automation** - Requirements -> Test Cases -> Automation -> Execution -> Reporting
- **Visual Testing** - AI-powered visual regression, layout checks
- **Test Data Management** - Synthetic data generation, dynamic fixtures

---

## Tech Stack

| Category | Tools |
|----------|-------|
| **Language** | JavaScript, TypeScript |
| **Framework** | Playwright |
| **Runtime** | Node.js |
| **Package Manager** | npm |
| **Version Control** | Git |
| **Reporting** | Playwright HTML Report, Allure |
| **CI/CD** | GitHub Actions |
| **AI Tools** | Playwright AI, MCP, Agents |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [VS Code](https://code.visualstudio.com/) (recommended editor)
- Git

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd learnPlayWright2x

# Install dependencies (when Playwright is added)
npm install

# Run JavaScript examples
node chapter_01_Basics/01_Basics.js

# Run Playwright tests (when added)
npx playwright test
```

---

## Daily Learning Notes

| Day | Chapter | Concepts Learned |
|-----|---------|------------------|
| Day 1 | `chapter_01_Basics` | Environment setup, first JS file, Node.js verification |
| Day 2 | `chapter_02_JavaScript_Concepts` | var basics, variable declaration |
| Day 3 | `chapter_03_Literals_Identifier` | Identifier rules, naming conventions, comments |
| Day 4 | `chapter_04_JavaScript Concepts` | var vs let vs const, hoisting, scope, TDZ |
| Day 5 | `chapter_05_Literal` | Literals, typeof, null vs undefined, template literals |
| Day 6 | `chapter_06_Opeartor` | Arithmetic, comparison, logical, ternary, nullish coalescing |
| Day 7 | `chapter_07_if_else` | if-else, else-if ladder, truthy/falsy, real-world examples |
| Day 8 | `Chapter_08_Switch` | switch, case, break, default, fall-through, grouping |
| Day 9 | `chapter_09_User_Input` | prompt(), readline, prompt-sync, input validation |
| Day 10 | `chapter_10_Loops` | for, while, do-while, continue, infinite loops |
| Day 11 | `chapter_11_Arrays` | Array creation, methods, searching, iteration, transformation |
| Day 12 | `chapter_12_Functions` | Function types, expressions, arrow functions, default & rest parameters, scope, closures, higher-order, pure functions, IIFE |
| Day 13 | `chapter_13_Strings` | String basics, properties, searching, slicing, transforming, replacing, splitting, conversion |
| Day 14 | `chapter_14_Objects` | Object basics, creation, properties, primitive vs reference, methods, getters/setters, destructuring, spread, utility methods |
| Day 15 | `chapter_15_2D_Array.js` | 2D arrays, grid/matrix structure, nested iteration, array methods with 2D, real-world test matrices, pattern printing |
| Day 16 | `chapter_16_Callback_Fn` | Callback functions, sync vs async callbacks, callback hell, Playwright test callback pattern, real-world QA automation flows |
| ... | ... | ... |

---

## Best Practices Followed

- **Meaningful naming** - Descriptive variables, functions, and files
- **Consistent conventions** - camelCase for variables, PascalCase for classes
- **Self-documenting code** - Comments explain *why*, code explains *what*
- **Modular structure** - One concept per file, clear folder hierarchy
- **Runnable examples** - Every file can be executed with `node`

---

## Resources

- [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Playwright Docs](https://playwright.dev/)
- [Node.js Docs](https://nodejs.org/en/docs/)

---

## License

This is a personal learning workspace. Feel free to use as a reference for your own learning journey!

---

> **"Code every day. Learn something new. Build with purpose."**
