///what is while loop

// while loop is a control flow statement that allows you to execute a block of code repeatedly until a certain condition is met. The syntax of a while loop is as follows:
// while (condition) {
//     // code to be executed
// }

let attempt = 0;
while (attempt < 5) {
    console.log("Attempt number: " + attempt);
    attempt++;
}

//help me with tricky examples of while loop
let number = 1;
while (number < 100) {
    console.log(number);
    number *= 2; // multiply the number by 2 in each iteration
}

//more examples of while loop
let count = 0;
while (count < 10) {
    console.log(count);
    count++;
}

//tricky error example of while loop
// let x = 0;
// while (x < 5) {
//     console.log(x);
//     // x++; // This line is commented out, which will cause an infinite loop
// }

let y = 10;
while (y < 10) {
    console.log(y);
    y++;
}
