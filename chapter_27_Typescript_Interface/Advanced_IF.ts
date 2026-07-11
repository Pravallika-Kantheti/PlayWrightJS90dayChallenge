// Interface with function types and indexable types

// Interface for a function signature
interface Calculator {
    (a: number, b: number): number;
}

let add: Calculator = (a, b) => a + b;
let multiply: Calculator = (a, b) => a * b;
let divide: Calculator = (a, b) => (b !== 0 ? a / b : NaN);

console.log("5 + 10 =", add(5, 10));
console.log("5 * 10 =", multiply(5, 10));
console.log("10 / 2 =", divide(10, 2));

// Indexable interface
interface ErrorMessages {
    [code: number]: string;
}

let errors: ErrorMessages = {
    200: "OK",
    404: "Not Found",
    500: "Server Error",
    401: "Unauthorized",
    403: "Forbidden"
};

console.log("\nError Codes:");
console.log("200:", errors[200]);
console.log("404:", errors[404]);
console.log("500:", errors[500]);

// Indexable with string keys
interface ConfigMap {
    [key: string]: string | number | boolean;
}

let config: ConfigMap = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retryEnabled: true,
    maxRetries: 3
};

console.log("\nConfig:");
console.log("API URL:", config["apiUrl"]);
console.log("Timeout:", config["timeout"]);

// Multiple interface implementation
interface IPrintable {
    print(): string;
}

interface ISerializable {
    serialize(): string;
}

class TestReport implements IPrintable, ISerializable {
    constructor(
        public name: string,
        public passed: number,
        public failed: number
    ) {}
    
    print(): string {
        return `Report: ${this.name} | Passed: ${this.passed} | Failed: ${this.failed}`;
    }
    
    serialize(): string {
        return JSON.stringify({
            name: this.name,
            passed: this.passed,
            failed: this.failed
        });
    }
}

let report = new TestReport("Regression Suite", 45, 2);
console.log("\nPrint:", report.print());
console.log("Serialize:", report.serialize());
