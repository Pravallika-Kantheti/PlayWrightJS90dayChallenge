function checkJsBasicsReadinessGate(hasSetup, hasPractice, hasNotes) {
    if (hasSetup === true && hasPractice === true && hasNotes === true) {
        return "READY";
    } else {
        return "BLOCKED";
    }
}

let status = checkJsBasicsReadinessGate(true, true, true);
console.log(status);