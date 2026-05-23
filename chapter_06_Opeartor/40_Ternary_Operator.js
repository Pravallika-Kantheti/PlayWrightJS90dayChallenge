//ternary operator
//condition ? exprIfTrue : exprIfFalse  
let age = 18;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.

//nested ternary operator
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(grade); // Output: B

let statusCode = 404;
let statusMessage = statusCode < 300 ? "OK" :
    statusCode < 404 ? "Not Found" :
        statusCode < 500 ? "Internal Server Error" : "Unknown Status";
console.log(statusMessage); // output: Internal Server Error

let temp = 35;
let weather = temp > 40 ? "Hot" :
    temp > 30 ? "Warm" :
        temp > 20 ? "Cool" : "Cold";
console.log(weather); // Output: Warm

let environment = "production";
let apiUrl = environment === "production" ? "https://api.example.com" :
    environment === "staging" ? "https://staging-api.example.com" :
        "http://localhost:3000";
console.log(apiUrl); // Output: https://api.example.com


let responseTime = 120;
let sla = 1000;
let performance = responseTime <= sla ? "Good" : "Needs Improvement";
console.log(performance); // Output: Good

let isCI = true;
let buildStatus = isCI ? "Running in CI environment" : "Running in local environment";
console.log(buildStatus); // Output: Running in CI environment

//nested ternary operator example
let dayOfWeek = 3;
let dayName = dayOfWeek === 1 ? "Monday" :
    dayOfWeek === 2 ? "Tuesday" :
        dayOfWeek === 3 ? "Wednesday" :
            dayOfWeek === 4 ? "Thursday" :
                dayOfWeek === 5 ? "Friday" :
                    dayOfWeek === 6 ? "Saturday" : "Sunday";
console.log(dayName); // Output: Wednesday

let ageGroup = age < 13 ? "Child" :
    age < 20 ? "Teenager" :
        age < 65 ? "Adult" : "Senior";
console.log(ageGroup); // Output: Adult

let statusCode = 404;
let statusMessage = statusCode < 300 ? "OK" :
    statusCode < 400 ? "Not Found" :
        statusCode < 500 ? "Internal Server Error" : "Unknown Status";
console.log(statusMessage); // Output: Not Found

let a = 10, b = 20, c = 30;

let max = a > b ? (a > c ? a : c) : (b > c ? b : c);
console.log(max); // Output: 30

