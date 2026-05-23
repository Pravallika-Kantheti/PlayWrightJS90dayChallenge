//what is user input
// User input refers to the data or information that a user provides to a computer program or application. 
// It can be in the form of text, numbers, clicks, or any other type of interaction that allows the user to communicate with the program. 
// User input is essential for many applications, as it allows users to customize their experience and interact with the program in a meaningful way. 
// In programming, user input is often collected through various methods such as forms, command-line interfaces, or graphical user interfaces (GUIs). 
// The collected input can then be processed and used to perform specific actions or generate output based on the user's preferences or requirements.

//another way to get user input in JavaScript is by using the prompt() function, which displays a dialog box that prompts the user to enter some input.
// The prompt() function takes a string argument that is displayed as a message to the user, and it returns the input entered by the user as a string. 
// If the user clicks "Cancel" or closes the dialog box, the prompt() function returns null. 
// It is important to note that the input received from the prompt() function is always a string, so if you need to work with numbers, you may need to convert the input using functions like Number() or parseInt().   
let num = prompt("Enter a number:");
if (num !== null) {
    num = Number(num);
    if (num % 2 === 0) {
        console.log("You entered an even number: " + num);
    } else {
        console.log("You entered an odd number: " + num);
    }
} else {
    console.log("Input cancelled.");
}