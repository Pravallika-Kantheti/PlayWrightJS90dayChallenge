// Find the first critical bug title from a bug list.

//     Rules:
// - Each bug has title and severity.
// - Return the title of the first bug with severity "critical".
// - Return "No critical bug" when none exists.

//     Input: findFirstCriticalJsBasicsBug([{ "title": "Typo", "severity": "low" }, { "title": "Login crash", "severity": "critical" }])

// Expected: "Login crash"

// Case 2
// Input: findFirstCriticalJsBasicsBug([{ "title": "Spacing issue", "severity": "low" }])

// Expected: "No critical bug"

// Interview Hints
// Array.find returns the first matching item.
// Always handle the not - found branch.

function findFirstCriticalJsBasicsBug(bug) {
    if (!Array.isArray(bug)) {
        return "No critical bug";
    }
    const foundItem = bug.find(item => item && item.severity === "critical");
    return foundItem ? foundItem.title : "No critical bug";


}

let result = findFirstCriticalJsBasicsBug([{ "title": "Spacing issue", "severity": "low" }]);
console.log(result);