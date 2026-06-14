// *****
// ****
// ***
// **
// *

let n = 5;
for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row.trim());
}

//   *
//  ***
// *****

let p = 3;
for (let i = 1; i <= p; i++) {
    let row = "";
    for (let j = 1; j <= p - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += "*";
    }
    console.log(row);
}