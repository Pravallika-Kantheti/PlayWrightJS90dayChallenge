// Summarize a two - dimensional matrix of suite results.

//     Rules:
// - The input is an array of arrays.
// - Each cell is a result string.
// - Count total, passed, failed, and collect failedCases.

//     Input: summarizeJsBasicsMatrix([["login-pass"], ["checkout-fail"]])

// Expected: { "total": 2, "passed": 1, "failed": 1, "failedCases": ["checkout-fail"] }

// Case 2
// Input: summarizeJsBasicsMatrix([["a-pass", "b-pass"], ["c-pass"]])

// Expected: { "total": 3, "passed": 3, "failed": 0, "failedCases": [] }

// Interview Hints
// Flatten first, then count.
// This mirrors multi - browser or multi - role test matrices.