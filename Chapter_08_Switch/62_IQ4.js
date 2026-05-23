let value = "5";

switch (value) {
    case 5:
        console.log("The value is 5");
        break;
    case "5":
        console.log("The value is the string '5'");
        break;
    default:
        console.log("The value is not 5");
}

let a = 0;
console.log(typeof a); // Output: "number"
switch (a) {
    case 0:
        console.log("The value of a is 0");
        break;
    case false:
        console.log("The value of a is false");
        break;
    default:
        console.log("The value of a is neither 0 nor false");
}