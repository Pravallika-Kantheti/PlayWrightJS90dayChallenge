let num = prompt("Enter a number:");
if (num !== null) {
    num = Number(num);
    if (!isNaN(num)) {
        console.log("You entered the number: " + num);
    } else {
        console.log("That's not a valid number.");
    }
} else {
    console.log("Input cancelled.");
}

//1. isNaN(num) — "Is this Not a Number?"
// isNaN() is a built-in JavaScript function
// It returns true if the value is NOT a valid number
// It returns false if the value IS a valid number