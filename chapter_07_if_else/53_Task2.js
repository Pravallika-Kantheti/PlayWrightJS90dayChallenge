//Question 1 — HTTP Status Code Categorizer

let statusCode = 404;

if (statusCode >= 200 && statusCode < 300) {
    console.log("Success");
} else if (statusCode >= 300 && statusCode < 400) {
    console.log("Redirection");
} else if (statusCode >= 400 && statusCode < 500) {
    console.log("Client Error");
} else if (statusCode >= 500 && statusCode < 600) {
    console.log("Server Error");
} else {
    console.log("Invalid Staus Code");
}

//Question 2 — Test Case Pass/Fail Verdict

let expectedValue = "Login Successful";
let actualValue = "Invalid Credentials";

if (expectedValue === actualValue) {
    console.log("Test Passed");
} else {
    console.log("Test Failed - Expected: " + expectedValue + " Actual: " + actualValue);
}

//Question 3 — Bug Severity Classifier

let bugImpactScore = 6;

if (bugImpactScore >= 9 && bugImpactScore <= 10) {
    console.log("Critical - block the release as  the severity score is more than 9");
} else if (bugImpactScore >= 7 && bugImpactScore <= 8) {
    console.log("High - impact is significant but not critical");
} else if (bugImpactScore >= 4 && bugImpactScore <= 6) {
    console.log("Medium - impact is moderate");
} else if (bugImpactScore >= 1 && bugImpactScore < 4) {
    console.log("Low - impact is minor");
} else {
    console.log("Invalid bug impact score");
}

//Question 4 — Build Health Reporter
//Problem: Given the percentage of test cases passed in a CI build, report build health.
let testPassPercentage = 69;

if (testPassPercentage === 100) {
    console.log("Green Build - All tests passed");
} else if (testPassPercentage >= 90 && testPassPercentage < 100) {
    console.log("Stable Build - Investigate the failures");
} else if (testPassPercentage >= 70 && testPassPercentage < 90) {
    console.log("Unstable build - Make sure test cases are reliable and investigate failures");
} else if (testPassPercentage < 70) {
    console.log("Broken Build - Block the deployment");
}

//Question 5 — Login Lockout After Failed Attempts
let failedLoginAttempts = 4;

if (failedLoginAttempts === 0) {
    console.log("Login Successful");
} else if (failedLoginAttempts === 1) {
    console.log("Warning: 2 attempts left before Lockout");
} else if (failedLoginAttempts === 2) {
    console.log("1 attempt left before Lockout")
} else if (failedLoginAttempts === 3) {
    console.log("Account locked - contact Support");
} else {
    console.log("Contact support and retry again after some time");
}

