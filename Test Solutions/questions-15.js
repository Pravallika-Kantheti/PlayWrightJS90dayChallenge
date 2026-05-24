function calculateJsBasicsWeightedScore(passed, failed, skipped) {
    let result = (passed * 2) - (failed * 1) + (skipped * 0);
    return result;
}

let finalresult = calculateJsBasicsWeightedScore(5, 6, 7);
console.log(finalresult);