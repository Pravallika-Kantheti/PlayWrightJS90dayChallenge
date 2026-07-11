# TypeScript - Interview Prep & Learning Notes

## What is TypeScript?

TypeScript is a **superset of JavaScript** that adds **static type checking** to the language. It catches errors at compile time rather than runtime.

> **JS is dynamically typed** - errors show up at runtime  
> **TS is statically typed** - errors show up during development

---

## Why TypeScript?

| Without TypeScript | With TypeScript |
|-------------------|-----------------|
| Runtime errors only | Compile-time error detection |
| No IntelliSense | Auto-completion & type hints |
| Hard to refactor | Safe refactoring with confidence |
| Documentation in comments | Self-documenting code |
| Bugs found by users | Bugs found by compiler |

---

## How to Run TypeScript Files

```bash
# Run directly (no compilation needed)
npx ts-node file.ts

# Or use the npm script
npm run ts file.ts

# Compile to JavaScript
npx tsc file.ts

# Compile all files (uses tsconfig.json)
npx tsc
```

---

## Primitive Types

| Type | Description | Example |
|------|-------------|---------|
| `string` | Text values | `let name: string = "John"` |
| `number` | All numbers (int, float) | `let age: number = 30` |
| `boolean` | true/false | `let isActive: boolean = true` |
| `null` | Explicit null | `let nothing: null = null` |
| `undefined` | Explicit undefined | `let notDefined: undefined = undefined` |
| `any` | Disable type checking (avoid) | `let anything: any = "hello"` |
| `unknown` | Safer than any (requires check) | `let data: unknown = "hello"` |

**File:** `196_TS_Part2.ts`

---

## Arrays & Objects

```typescript
// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["John", "Jane"];

// Objects
let user: { name: string; age: number } = {
    name: "John",
    age: 30
};
```

**File:** `197_TS_Part2.ts`

---

## Function Annotations

```typescript
// Regular function
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Void - returns nothing
function logMessage(msg: string): void {
    console.log(msg);
}

// Never - never returns
function throwError(message: string): never {
    throw new Error(message);
}
```

**File:** `194_TS_HelloWorld.ts`, `195_Part1.ts`

---

## void vs never - Complete Comparison

| Feature | `void` | `never` |
|---------|--------|---------|
| **Meaning** | Function returns nothing (undefined) | Function **NEVER** returns |
| **Use Case** | Side-effects: log, update UI, mutate | Errors: throw, infinite loops |
| **Can function finish?** | **YES** - runs and ends normally | **NO** - never completes |
| **Return value** | `undefined` | Nothing (control never comes back) |
| **Can you assign it?** | Can assign `undefined` | Cannot assign any value |
| **Type inference** | TS infers void when no return | TS never infers never automatically |
| **Subtype of** | Not a subtype | **Subtype of every type** (bottom type) |
| **Interview Q** | "What does void return?" | "What does never return?" |

### void Example

```typescript
function logMessage(msg: string): void {
    console.log("[LOG]", msg);
    // Returns undefined implicitly
}

logMessage("Test started"); // OK
const result: void = undefined; // OK
```

### never Example

```typescript
function throwError(message: string): never {
    throw new Error(message);
    // Code below is UNREACHABLE
}

function keepPolling(): never {
    while (true) {
        console.log("Polling...");
    }
    // Infinite loop - never exits
}
```

### Key Difference in Action

```typescript
// void function - control returns
function voidFn(): void {
    console.log("I will finish");
}

// never function - control NEVER returns
function neverFn(): never {
    throw new Error("I will crash");
}

console.log("Before void");
voidFn();
console.log("After void - this runs!"); // ✅ This runs

console.log("Before never");
neverFn();
console.log("After never - this NEVER runs!"); // ❌ Dead code
```

### never in Type Guards (Exhaustive Checking)

```typescript
type Shape = 
    | { kind: "circle"; radius: number }
    | { kind: "square"; side: number };

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        default:
            // If new shape added but not handled, TS errors
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
```

**File:** `198_TS_Part3.ts`

---

## Common Interview Questions

### Q1: What is the difference between `any` and `unknown`?
**A:** `any` disables type checking completely - you can do anything with it. `unknown` is safer - you must check the type before using it.

```typescript
let a: any = "hello";
a.toFixed(); // No error (but crashes at runtime)

let u: unknown = "hello";
// u.toFixed(); // ERROR - must check first
if (typeof u === "number") u.toFixed(); // OK
```

### Q2: What is type inference?
**A:** TypeScript automatically detects types when not explicitly declared.

```typescript
let name = "John"; // TypeScript infers: string
let count = 42;    // TypeScript infers: number
```

### Q3: Difference between `void` and `never`?
**A:** 
- `void` = function completes but returns nothing (undefined)
- `never` = function never completes (throw, infinite loop, type exhaustion)

### Q4: Can you assign `never` to other types?
**A:** **YES!** `never` is a bottom type - assignable to everything. But nothing is assignable to `never`.

```typescript
let x: string = throwError("msg"); // Valid
let y: never = "hello"; // ERROR
```

### Q5: Why use TypeScript for test automation?
**A:** 
- Catch bugs before running tests
- Auto-completion for Playwright APIs
- Type-safe page objects
- Easier refactoring of large test suites
- Self-documenting test code

---

## Files in This Chapter

| File | Description |
|------|-------------|
| `193_Typescript.js` | JavaScript equivalent for comparison |
| `194_TS_HelloWorld.ts` | First TS file: variables, function with return type |
| `194_TS_HelloWorld.js` | Compiled JavaScript output |
| `195_Part1.ts` | Simple console.log example |
| `196_TS_Part2.ts` | Primitive types: string, number, boolean, null, undefined, any, unknown |
| `197_TS_Part2.ts` | Type narrowing, function annotations, arrow functions, object annotations |
| `198_TS_Part3.ts` | **void vs never** comparison with table, examples, and interview Q&A |

---

## Quick Checklist

- [x] `string`, `number`, `boolean` - basic types
- [x] `null` vs `undefined` - explicit emptiness
- [x] `any` vs `unknown` - unsafe vs safe dynamic typing
- [x] Arrays: `number[]` or `Array<string>`
- [x] Objects: `{ name: string; age: number }`
- [x] Functions: parameter types and return types
- [x] `void` - returns nothing
- [x] `never` - never returns
- [x] Type inference - TS guesses types
- [x] Type guards - narrowing with `typeof`
- [x] Exhaustive checking with `never`

---

## Practice Exercises

### Exercise 1: Type Annotations
Create variables with these types: string, number, boolean, number[], object with name and age.

### Exercise 2: Function Types
Write a function `calculateArea(width: number, height: number): number`.
Write a function `printResult(result: number): void`.

### Exercise 3: never Practice
Write a function `handleApiError(statusCode: number): never` that throws an error for any status >= 400.

### Exercise 4: Type Guard
Write a function that accepts `string | number` and returns different outputs based on the type.

---

## Commands Reference

```bash
# Install TypeScript locally
npm install --save-dev typescript ts-node @types/node

# Run TypeScript file directly
npx ts-node file.ts

# Compile TypeScript to JavaScript
npx tsc file.ts

# Watch mode (recompiles on changes)
npx tsc --watch

# Initialize tsconfig.json
npx tsc --init
```

---

> **"TypeScript is JavaScript with a safety net."**
