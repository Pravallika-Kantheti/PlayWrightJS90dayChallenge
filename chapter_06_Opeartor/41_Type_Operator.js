//type operator
//typeof operator
let name = "Alice";
console.log(typeof name); // Output: string

let age = 30;
console.log(typeof age); // Output: number  

let isStudent = true;
console.log(typeof isStudent); // Output: boolean

let person = { name: "Bob", age: 25 };
console.log(typeof person); // Output: object

let sayHello = function () {
    console.log("Hello!");
}
console.log(typeof sayHello); // Output: function

let undefinedVariable;
console.log(typeof undefinedVariable); // Output: undefined

//examples for typeof operator  
let arr = [1, 2, 3];
console.log(typeof arr); // Output: object  

let nullValue = null;
console.log(typeof nullValue); // Output: object (this is a known quirk in JavaScript)

let symbolValue = Symbol("mySymbol");
console.log(typeof symbolValue); // Output: symbol

let bigIntValue = BigInt(12345678901234567890);
console.log(typeof bigIntValue); // Output: bigint

let func = () => console.log("Arrow function");
console.log(typeof func); // Output: function

let date = new Date();
console.log(typeof date); // Output: object

let regex = /abc/;
console.log(typeof regex); // Output: object

let circumference = 2 * Math.PI * 5;
console.log(typeof circumference); // Output: number

//instanceof operator
//what is instanceof operator
//The instanceof operator is used to check if an object is an instance of a specific class or constructor function. 
// It returns true if the object is an instance of the specified class or constructor, and false otherwise. This operator 
// is commonly used in JavaScript to determine the type of an object at runtime, especially when working with custom classes or constructors.
class Person {
    constructor(name) {
        this.name = name;
    }
}

let person1 = new Person("Bob");
console.log(person1 instanceof Person); // Output: true
console.log(person1 instanceof Object); // Output: true     
let notAPerson = {};
console.log(notAPerson instanceof Person); // Output: false 

function Car(make, model) {
    this.make = make;
    this.model = model;
}
let car1 = new Car("Toyota", "Camry");
console.log(car1 instanceof Car); // Output: true
console.log(car1 instanceof Object); // Output: true    
let notACar = {};
console.log(notACar instanceof Car); // Output: false