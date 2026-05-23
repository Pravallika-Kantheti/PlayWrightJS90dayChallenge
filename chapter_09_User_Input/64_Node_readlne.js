const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number ", (input) => {
    console.log(`Number, ${input}!`);
    let num = Number(input);
    if (!isNaN(num)) {
        console.log("You entered the number: " + num);
    } else {
        console.log("That's not a valid number.");
    }
    rl.close();
});