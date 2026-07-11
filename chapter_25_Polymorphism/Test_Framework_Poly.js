// Example 3: Real-World Test Automation Framework
class TestCase {
    execute() {
        console.log("Running generic test setup");
    }
    
    getType() {
        return "Generic";
    }
}

class UITest extends TestCase {
    execute() {
        console.log("Running UI Test: Opening browser, clicking elements");
    }
    
    getType() {
        return "UI";
    }
}

class APITest extends TestCase {
    execute() {
        console.log("Running API Test: Sending HTTP requests, validating JSON");
    }
    
    getType() {
        return "API";
    }
}

class PerformanceTest extends TestCase {
    execute() {
        console.log("Running Performance Test: Load testing, measuring response times");
    }
    
    getType() {
        return "Performance";
    }
}

// Polymorphic behavior - same interface, different implementations
function runTest(testCase) {
    console.log(`\n--- ${testCase.getType()} Test ---`);
    testCase.execute();
}

// Run all tests using the same interface
runTest(new UITest());
runTest(new APITest());
runTest(new PerformanceTest());
