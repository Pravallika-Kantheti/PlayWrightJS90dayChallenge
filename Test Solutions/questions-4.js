function getJsBasicsKeywordMeaning(term) {
    const termsLookUp = {
        node: "runtime",
        v8: "engine",
        npm: "package-manager"
    };
    if (typeof term === null) return "unknown";
    let normalize = term.trim().toLowerCase();
    return termsLookUp[normalize] || "unknown";
}

let word = "node";
let terms = getJsBasicsKeywordMeaning(word);
console.log(terms);