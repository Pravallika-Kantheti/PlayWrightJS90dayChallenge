// Practical Test Automation Framework using Interface + Abstract Class

// Interface - Contract for all browsers
interface IBrowser {
    launch(): void;
    close(): void;
    goto(url: string): void;
}

// Abstract Class - Base functionality + required methods
abstract class BaseTest {
    protected browser: IBrowser;
    protected testName: string;
    
    constructor(browser: IBrowser, name: string) {
        this.browser = browser;
        this.testName = name;
    }
    
    // Abstract - MUST be implemented
    abstract runTest(): void;
    
    // Concrete - shared functionality
    setup(): void {
        console.log(`\n===== ${this.testName} =====`);
        this.browser.launch();
    }
    
    teardown(): void {
        this.browser.close();
        console.log(`===== End ${this.testName} =====\n`);
    }
    
    // Template method pattern
    execute(): void {
        this.setup();
        this.runTest();
        this.teardown();
    }
}

// Concrete implementations
class LoginTest extends BaseTest {
    runTest(): void {
        this.browser.goto("/login");
        console.log("Testing login functionality...");
    }
}

class CheckoutTest extends BaseTest {
    runTest(): void {
        this.browser.goto("/checkout");
        console.log("Testing checkout flow...");
    }
}

class SearchTest extends BaseTest {
    runTest(): void {
        this.browser.goto("/search");
        console.log("Testing search functionality...");
    }
}

// Mock browser implementations
class PlaywrightBrowser implements IBrowser {
    launch(): void { console.log("Playwright: Launching browser"); }
    close(): void { console.log("Playwright: Closing browser"); }
    goto(url: string): void { console.log(`Playwright: Navigating to ${url}`); }
}

class SeleniumBrowser implements IBrowser {
    launch(): void { console.log("Selenium: Launching WebDriver"); }
    close(): void { console.log("Selenium: Closing WebDriver"); }
    goto(url: string): void { console.log(`Selenium: Navigating to ${url}`); }
}

// Usage
let browser = new PlaywrightBrowser();
let tests: BaseTest[] = [
    new LoginTest(browser, "Login Test"),
    new CheckoutTest(browser, "Checkout Test"),
    new SearchTest(browser, "Search Test")
];

console.log("=== Running Test Suite ===\n");
tests.forEach(test => test.execute());

// Switch browser easily
console.log("=== Running with Selenium ===\n");
let selenium = new SeleniumBrowser();
let seleniumTests: BaseTest[] = [
    new LoginTest(selenium, "Login Test (Selenium)"),
    new SearchTest(selenium, "Search Test (Selenium)")
];
seleniumTests.forEach(test => test.execute());
