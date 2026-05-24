//// Normalize deduplicate tags used for organizing tests.

//     Rules:
//     - Trim each tag.
// - Lowercase each tag.
// - Remove blank values.
// - Keep first - seen order.


//     Input: createUniqueJsBasicsTags([" Smoke ", "smoke", "Regression"])

// Expected: ["smoke", "regression"]

// Case 2
// Input: createUniqueJsBasicsTags(["", " API ", " ", "api"])

// Expected: ["api"]

// Interview Hints
// Do not use Set before normalization.
// Preserve first - seen order.

function createUniqueJsBasicsTags(tags) {
    if (!Array.isArray(tags)) {
        return [];
    }
    let seen = {};
    let result = [];
    for (let i = 0; i < tags.length; i++) {
        // Step 1: Normalize (trim + lowercase)
        let normalized = String(tags[i]).trim().toLowerCase();
        // Step 2: Remove blank values
        if (normalized === "") {
            continue;
        }
        // Step 3: Deduplicate — only add if we haven't seen it before
        if (!seen[normalized]) {
            seen[normalized] = true;
            result.push(normalized);
        }
    }
    return result;

}

let result = createUniqueJsBasicsTags(["", " API ", " ", "api"]);
console.log(result);