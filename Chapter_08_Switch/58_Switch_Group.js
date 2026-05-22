let browser = "Edge";

switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project based browser");
        break;
    case "Firefox":
        console.log("Mozilla Firefox");
        break;
    case "Safari":
        console.log("Apple Safari - Uses javaScriptCore engine");
        break;
    default:
        console.log("Unknown browser - manual testing needed");
}