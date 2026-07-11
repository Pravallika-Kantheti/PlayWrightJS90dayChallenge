// Interface inheritance (extends)
interface BaseTest {
    id: number;
    name: string;
}

interface UITest extends BaseTest {
    selector: string;
    action: "click" | "fill" | "hover";
}

interface APITest extends BaseTest {
    endpoint: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
}

let uiTest: UITest = {
    id: 1,
    name: "Button Click Test",
    selector: "#submit-btn",
    action: "click"
};

let apiTest: APITest = {
    id: 2,
    name: "User Creation API",
    endpoint: "/api/users",
    method: "POST"
};

console.log("UI Test:", uiTest);
console.log("API Test:", apiTest);

// Class implementing interface
interface IBrowser {
    open(url: string): void;
    close(): void;
    takeScreenshot(): string;
}

class ChromeBrowser implements IBrowser {
    open(url: string): void {
        console.log(`Chrome opening: ${url}`);
    }
    
    close(): void {
        console.log("Chrome closing");
    }
    
    takeScreenshot(): string {
        return "chrome-screenshot.png";
    }
}

class FirefoxBrowser implements IBrowser {
    open(url: string): void {
        console.log(`Firefox opening: ${url}`);
    }
    
    close(): void {
        console.log("Firefox closing");
    }
    
    takeScreenshot(): string {
        return "firefox-screenshot.png";
    }
}

// Polymorphic usage
let browsers: IBrowser[] = [
    new ChromeBrowser(),
    new FirefoxBrowser()
];

browsers.forEach(browser => browser.open("https://example.com"));
