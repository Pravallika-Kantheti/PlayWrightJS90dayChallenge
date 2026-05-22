//no break statement in switch case will execute all the cases after the matched case until it finds a break statement or reaches the end of the switch statement
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Today is Monday.");
    case "Tuesday":
        console.log("Today is Tuesday.");
    case "Wednesday":
        console.log("Today is Wednesday.");
    case "Thursday":
        console.log("Today is Thursday.");
    case "Friday":
        console.log("Today is Friday.");
    case "Saturday":
        console.log("Today is Saturday.");
    case "Sunday":
        console.log("Today is Sunday.");
    default:
        console.log("Invalid day.");
}