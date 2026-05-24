function normalizeJsBasicsLabel(label) {
    let normalText = label.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return `js-basic-${normalText}`;
}

let result = normalizeJsBasicsLabel(" Login Button ");
console.log(result);