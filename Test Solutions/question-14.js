// // Case 1
// // Input: buildJsBasicsChecklist(["Install Node","Create GitHub repo"])

// // Expected: ["1. Install Node - TODO","2. Create GitHub repo - TODO"]

// // Case 2
// // Input: buildJsBasicsChecklist(["Practice switch"," ","Push code"])

// // Expected: ["1. Practice switch - TODO","2. Push code - TODO"]

// // Interview Hints
// // Filter blanks before numbering.
// // // Numbering after filtering avoids gaps.

// Convert a list of tasks into a numbered checklist.

// Rules:
// - Keep the original task text after trimming.
// - Number items from 1.
// - Append " - TODO" to each item.
// - Skip blank values.

function buildJsBasicsChecklist(tags) {
    if (!Array.isArray(tags)) {
        return [];
    }
    let seen = {};
    let unique = [];
    for (let i = 0; i < tags.length; i++) {
        // Step 1: Normalize (trim + lowercase)
        let normalized = String(tags[i]).trim();
        // Step 2: Remove blank values
        if (normalized === "") {
            continue;
        }
        // Step 3: Deduplicate — only add if we haven't seen it before
        if (!seen[normalized]) {
            seen[normalized] = true;
            unique.push(normalized);
        }


    }
    let result = [];
    for (let i = 0; i < unique.length; i++) {
        let number = i + 1;
        result.push(number + ". " + unique[i] + " - TODO");
    }
    return result;

}

let result = buildJsBasicsChecklist(["Practice switch", " ", "Push code"]);
console.log(result);