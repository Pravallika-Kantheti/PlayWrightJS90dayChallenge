const prompt = require('prompt-sync')();

let num = Number(prompt("Enter a number:"));
if (num !== null) {
    if (!isNaN(num)) {
        console.log("You entered the number: " + num);
    } else {
        console.log("That's not a valid number.");
    }
} else {
    console.log("Input cancelled.");
}   