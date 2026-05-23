let x = "global";

if (true) {
    // TDZ for block-scoped "x" starts here
    // console.log(x);   // ReferenceError (NOT "global"!)
    let x = "block";     // TDZ ends
    console.log(x);      // "block"
}

console.log(x);

//TDZ - Temporal Dead zone
//The TDZ is the period between when a scope starts and when the let/const declaration is encountered.
// During this zone, the variable EXISTS in memory but is marked as "uninitialized."

