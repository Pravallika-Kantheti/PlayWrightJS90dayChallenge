// Abstract Class Example
abstract class BasePage {
    // Abstract property - MUST be implemented by child
    abstract pageUrl: string;
    
    // Abstract method - MUST be implemented by child
    abstract verify(): void;
    
    // Concrete method - CAN be used as-is
    navigate(): void {
        console.log(`Navigating to: ${this.pageUrl}`);
    }
    
    // Concrete method
    takeScreenshot(): string {
        return `screenshot-${Date.now()}.png`;
    }
}

class LoginPage extends BasePage {
    pageUrl: string = "/login";
    
    verify(): void {
        console.log("Verifying login page elements");
        console.log("- Username field exists");
        console.log("- Password field exists");
        console.log("- Login button is visible");
    }
}

class DashboardPage extends BasePage {
    pageUrl: string = "/dashboard";
    
    verify(): void {
        console.log("Verifying dashboard elements");
        console.log("- Welcome message displayed");
        console.log("- Navigation menu loaded");
    }
}

// let page = new BasePage();  // ❌ Error: Cannot create instance of abstract class

let login = new LoginPage();
login.navigate();
login.verify();

let dashboard = new DashboardPage();
dashboard.navigate();
dashboard.verify();

// Access modifiers with abstract class
abstract class TestFramework {
    // Public - accessible everywhere
    public testName: string;
    
    // Protected - accessible in this class and subclasses
    protected testData: object;
    
    // Private - accessible only in this class
    private logs: string[] = [];
    
    constructor(name: string) {
        this.testName = name;
        this.testData = {};
    }
    
    abstract execute(): void;
    
    protected log(message: string): void {
        this.logs.push(message);
        console.log(`[${this.testName}] ${message}`);
    }
    
    public getLogs(): string[] {
        return [...this.logs];
    }
}

class UIAutomationTest extends TestFramework {
    execute(): void {
        this.log("Opening browser");
        this.log("Performing UI actions");
        this.testData = { browser: "Chrome" };
        // this.logs.push("test");  // ❌ Error: private
    }
}

let uiTest = new UIAutomationTest("Login Test");
uiTest.execute();
console.log("Logs:", uiTest.getLogs());
