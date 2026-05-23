//swhat is switch statement
// A switch statement is a control flow statement that allows you to execute different blocks of code based on the value of a variable or expression. 
// It is often used as an alternative to multiple if-else statements when you have a large number of conditions to check. 
// The switch statement evaluates the expression and compares it against the values specified in the case clauses. 
// If a match is found, the corresponding block of code is executed until a break statement is encountered or the end of the switch block is reached. 
// If no match is found, the default block (if provided) will be executed.

//what happens if we forget to use break statement in switch case
// If you forget to use a break statement in a switch case, the code will "fall through" to the next case, meaning that it will continue executing the code in the subsequent cases until it encounters a break statement or reaches the end of the switch block. 
// This can lead to unintended consequences and bugs in your code, as it may execute code that you did not intend to run. 
// Therefore, it is important to always include a break statement at the end of each case block in a switch statement to prevent fall-through behavior.

//what is break statement in general
// A break statement is a control flow statement that is used to exit a loop or a switch statement before it has completed its normal execution.    
// In a loop, a break statement can be used to exit the loop when a certain condition is met, allowing the program to continue executing the code that follows the loop.
// In a switch statement, a break statement is used to exit the switch block after a case has been executed, preventing the code from "falling through" to the next case. 
// The break statement can be used in various programming languages, including JavaScript, C++, Java, and many others.

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
    case "Thursday":
        console.log("Today is Thursday.");
        break;
    case "Friday":
        console.log("Today is Friday.");
        break;
    case "Saturday":
        console.log("Today is Saturday.");
        break;
    case "Sunday":
        console.log("Today is Sunday.");
        break;
    default:
        console.log("Invalid day.");
}   