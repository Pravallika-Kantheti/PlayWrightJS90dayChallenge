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
