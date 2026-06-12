function outer() {
    let message = "hello";
    console.log("Outer CALLED!");
    function inner() {
        console.log(message);
    }
    return inner;
}


let fn_inner = outer();
fn_inner();
//console.log(fn_inner);//output:Outer CALLED!
//[Function: inner]


// inner(); // ReferenceError: inner is not defined