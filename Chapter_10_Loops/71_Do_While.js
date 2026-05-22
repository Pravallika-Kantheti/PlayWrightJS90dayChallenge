//what is do while loop

// do while loop is a control flow statement that allows you to execute a block of code at least once, and then repeatedly execute it as long as a certain condition is met. The syntax of a do while loop is as follows:
// do {
//     // code to be executed
// } while (condition); 

let count = 0;
do {
    console.log(count);
    count++;
} while (count < 5);

let retry = 0;
do {
    console.log("Attempt number: " + retry);
    console.log("retry");
    retry++;
} while (retry < 5);