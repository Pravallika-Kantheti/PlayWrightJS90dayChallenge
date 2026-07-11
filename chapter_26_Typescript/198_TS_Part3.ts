/**
 * TypeScript - void vs never
 * 
 * Both are return types for functions, but they have very different meanings.
 * Use this file to understand the difference and practice with examples.
 */

// ============================================================
// TABLE: void vs never
// ============================================================

/*

| Feature                | void                                    | never                                        |
|------------------------|-----------------------------------------|----------------------------------------------|
| Meaning                | Function returns nothing (undefined)    | Function NEVER returns (no completion)       |
| Use Case               | Side-effects: log, update UI, mutate    | Errors: throw, infinite loops, exhaust checks|
| Can function finish?   | YES - runs and ends normally            | NO - execution never completes normally      |
| Return value           | undefined                               | Nothing (control never comes back)           |
| Can you assign it?     | Can assign `undefined` to void          | Cannot assign any value to never             |
| Type inference         | TS infers void when no return         | TS never infers never automatically          |
| Subtype relationship   | void is NOT assignable from never      | never is assignable to every other type      |
| Bottom type?           | No                                      | Yes - the "bottom" type (no possible value)  |

*/


// ============================================================
// void - Returns nothing (undefined)
// ============================================================

// Function with void return type
function logMessage(msg: string): void {
    console.log("[LOG]", msg);
    // No return statement - implicitly returns undefined
}

function updateCounter(el: HTMLElement, count: number): void {
    el.textContent = count.toString();
    // Side-effect only - no return needed
}

function saveToDB(data: object): void {
    // Imagine DB write here
    console.log("Saved:", data);
}

// Calling void functions
logMessage("Test started");     // OK
const result1: void = undefined; // OK - undefined is assignable to void


// ============================================================
// never - Never returns
// ============================================================

// Function that throws an error - never completes
function throwError(message: string): never {
    throw new Error(message);
    // Code below is UNREACHABLE - TS knows this
}

// Function with infinite loop - never exits
function keepPolling(): never {
    while (true) {
        // Polling forever
        console.log("Polling...");
    }
    // This line is unreachable
}

// Exhaustive check - ensures all cases are handled
function assertNever(x: never): never {
    throw new Error("Unexpected value: " + x);
}

// Type narrowing helper
function handleStatus(status: "active" | "inactive"): string {
    if (status === "active") return "User is active";
    if (status === "inactive") return "User is inactive";
    
    // If a new status is added but not handled, TS errors here
    return assertNever(status); // status is inferred as never here
}


// ============================================================
// PRACTICAL DIFFERENCE - SEE IT IN ACTION
// ============================================================

// void function - control returns to caller
function voidFunction(): void {
    console.log("I will finish and return undefined");
}

// never function - control NEVER returns
function neverFunction(): never {
    throw new Error("I will crash and never return");
}

console.log("Before void");
voidFunction();
console.log("After void - this line runs!");

console.log("\nBefore never");
// neverFunction(); // Uncomment to see: code below won't execute!
console.log("After never - this line NEVER runs if neverFunction is called");


// ============================================================
// KEY INTERVIEW POINTS
// ============================================================

/*

Q1: What is the difference between void and never?
A: void = function completes but returns nothing.
   never = function never completes (throw, infinite loop, type guard).

Q2: Can a void function have a return statement?
A: Yes, but only `return;` (no value) or return undefined.
   `return 5;` in a void function is a TS error.

Q3: Can never be assigned to other types?
A: YES! `let x: string = neverFunction();` is valid.
   This is because never is a "bottom type" - it's assignable to everything.
   But you can never assign anything TO never.

Q4: When should I use never?
A: 1) Functions that always throw
   2) Infinite loops
   3) Exhaustive type checks (switch/if-else)
   4) Unreachable code paths

Q5: What happens if I call a never function?
A: The code after it becomes unreachable. TypeScript flags this.

Q6: Can I use void for function parameters?
A: void as a parameter type means "function that returns nothing".
   Example: `function runCallback(cb: () => void): void`

*/


// ============================================================
// ADVANCED: never in Type Guards
// ============================================================

type Shape = 
    | { kind: "circle"; radius: number }
    | { kind: "square"; side: number }
    | { kind: "triangle"; base: number; height: number };

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "triangle":
            return 0.5 * shape.base * shape.height;
        default:
            // If a new shape is added but not handled,
            // TS will error: 'shape' is type 'never' but still used
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}


// ============================================================
// QUICK COMMANDS TO RUN THIS FILE
// ============================================================
// Run: npx ts-node chapter_26_Typescript\198_TS_Part3.ts
// Compile: npx tsc chapter_26_Typescript\198_TS_Part3.ts

console.log("\n=== void vs never examples loaded ===");
console.log("Read the comments and code above to understand the difference!");
