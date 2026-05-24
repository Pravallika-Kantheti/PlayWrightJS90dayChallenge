function countPassingJsBasicsChecks(results) {
    if (!Array.isArray(results)) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < results.length; i++) {
        let normalise = String(results[i]).trim().toLowerCase();
        if (normalise.includes("pass")) {
            count++;
        }
    }
    return count;
}

let final = countPassingJsBasicsChecks(["SETUP PASS", "CONFIG PASS"]);
console.log(final);