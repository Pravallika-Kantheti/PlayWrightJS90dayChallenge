// Interface with optional and readonly properties
interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
    description?: string;        // Optional
    readonly createdAt: Date;    // Readonly
}

let test1: TestCase = {
    id: 1,
    name: "Login with valid credentials",
    status: "PASS",
    duration: 1500,
    createdAt: new Date()
};

console.log("TC-" + test1.id + ": " + test1.name + " → " + test1.status);

// test1.createdAt = new Date();  // ❌ Error: readonly

let test2: TestCase = {
    id: 2,
    name: "Login with invalid password",
    status: "FAIL",
    duration: 3200,
    createdAt: new Date()
};
console.log("TC-" + test2.id + ": " + test2.name + " → " + test2.status);

// Interface with methods
interface TestRunner {
    run(testName: string): void;
    stop(): void;
    getResults(): string[];
}

let playwrightRunner: TestRunner = {
    run(testName) {
        console.log(`Running: ${testName}`);
    },
    stop() {
        console.log("Stopping test execution");
    },
    getResults() {
        return ["PASS", "FAIL", "PASS"];
    }
};

playwrightRunner.run("Login Test");
console.log(playwrightRunner.getResults());
