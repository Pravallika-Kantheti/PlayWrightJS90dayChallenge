let browser = ["chrome", "firefox", "safari", "opera", "edge"];
console.log(browser.length); //5
console.log(browser);

// //Adding elements to an array
// browser.push("brave", "vivaldi");
// console.log(browser); //["chrome", "firefox", "safari", "opera","edge", "brave", "vivaldi"]

browser.pop();
console.log(browser); //["chrome", "firefox", "safari", "opera"]

let removed = browser.shift();
console.log(removed);
console.log(browser); //["firefox", "safari", "opera"]

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera is removed from the selenium!");
    }
}