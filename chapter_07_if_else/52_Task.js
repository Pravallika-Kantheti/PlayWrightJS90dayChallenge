//Even or odd number with if else

let number = 9;
console.log(`the number is : ${number}`);
if (number % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}


//Student grade based on score
let score = 67;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else if (score >= 60) {
    console.log("Grade D");
} else {
    console.log("Fail or Grade F");
}


//leap year or not
let year = 1000;

if (year % 4 === 0 && year % 100 !== 0) {
    console.log(year + " is a leap year.");
} else if (year % 400 === 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

