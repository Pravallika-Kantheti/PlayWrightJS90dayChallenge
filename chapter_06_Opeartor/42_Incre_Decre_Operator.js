//increment operator
let x = 5;
x++;
console.log(x); // Output: 6

//decrement operator
let y = 10;
y--;
console.log(y); // Output: 9

//prefix increment
let a = 3;
console.log(++a); // Output: 4 (increments a by 1 before returning the value)

//postfix increment
let b = 3;
console.log(b++);
console.log(b); // Output: 4 (returns b then increments it by 1)
//prefix decrement
let c = 7;
console.log(--c); // Output: 6 (decrements c by 1 before returning the value)
//postfix decrement
let d = 7;
console.log(d--);
console.log(d); // Output: 6 (returns d then decrements it by 1)

let e = 10;
console.log(++e); // Output: 11 (increments e by 1 before returning the value)
console.log(e++); // Output: 11 (returns e then increments it by 1)
console.log(e); // Output: 12 (e was incremented by the previous operation)
console.log(++e + e++); // Output: 25 (increments e to 13, then adds it to the current value of e (13) and then increments e to 14)
console.log(e); // Output: 14 (e was incremented by the previous operation)

console.log(--e + e--); // Output: 27 (decrements e to 13, then adds it to the current value of e (13) and then decrements e to 12) 
console.log(e); // Output: 12 (e was decremented by the previous operation)

let t = 10;
console.log(t++ + ++t); // Output: 22 (returns d (10) then increments it to 11, then increments d to 12 and adds it to the previous value of d (10) 
console.log(t); // Output: 12 (d was incremented by the previous operation)
