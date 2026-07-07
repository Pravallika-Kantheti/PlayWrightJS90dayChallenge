1. Class
A class is a blueprint or template for creating objects. It defines properties (data) and methods (functions) that the objects will have.
class Person {
  // Properties and methods go here
  name = "John";
  
  sayHello() {
    console.log("Hello!");
  }
}
2. Object
An object is an instance of a class — a real entity created from the blueprint.
const person1 = new Person(); // Creating an object
const person2 = new Person(); // Another object

person1.sayHello(); // Output: Hello!
3. Constructor
The constructor is a special method that runs automatically when a new object is created. It's used to initialize object properties.
class Person {
  constructor(name, age) {
    this.name = name;  // Initializing properties
    this.age = age;
  }
}

const person1 = new Person("Alice", 25);
console.log(person1.name); // Output: Alice
console.log(person1.age);  // Output: 25
4. this Keyword
this refers to the current object instance — the specific object calling the method.
class Person {
  constructor(name) {
    this.name = name;  // 'this' refers to the new object being created
  }
  
  greet() {
    console.log(`Hello, my name is ${this.name}`); // 'this' refers to the object calling greet()
  }
}

const person1 = new Person("Bob");
person1.greet(); // Output: Hello, my name is Bob
Quick Summary
Concept
Class
Object
Constructor
this
Complete Example
class Car {
  constructor(brand, model) {
    this.brand = brand;   // 'this' = the new car object
    this.model = model;
  }
  
  getInfo() {
    return `${this.brand} ${this.model}`; // 'this' refers to the calling object
  }
}

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

console.log(car1.getInfo()); // Output: Toyota Camry
console.log(car2.getInfo()); // Output: Honda Civic
💡 Key Rule: The value of this depends on how a function is called, not where it's defined. In methods called on objects, this refers to that object.

5. Public Variables (Properties)
Public variables are accessible from outside the class. Anyone can read or modify them.
class User {
  constructor(name) {
    this.name = name;  // Public property
  }
}

const user = new User("Alice");
console.log(user.name); // Accessible: "Alice"
user.name = "Bob";      // Can be modified

6. Private Variables (Properties)
Private variables are only accessible inside the class. They cannot be accessed or modified from outside.
Modern Way (ES2022+) - Using # prefix:
class BankAccount {
  #balance;  // Private field (starts with #)

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;  // Accessed inside class only
  }
}

const account = new BankAccount(100);
console.log(account.getBalance()); // Output: 100
console.log(account.#balance);     // SyntaxError: Private field cannot be accessed outside class

Old Way (Before ES2022) - Using Closures or WeakMaps:
function BankAccount(initialBalance) {
  let balance = initialBalance;  // "Private" via closure

  this.deposit = function(amount) {
    balance += amount;
  };

  this.getBalance = function() {
    return balance;
  };
}

const account = new BankAccount(100);
console.log(account.getBalance()); // Output: 100
console.log(account.balance);      // Undefined (not accessible)

Controlled Access with Getters and Setters:
class Person {
  #age;  // Private

  constructor(age) {
    this.#age = age;
  }

  // Getter - allows reading
  get age() {
    return this.#age;
  }

  // Setter - allows controlled modification
  set age(value) {
    if (value > 0) {
      this.#age = value;
    } else {
      console.log("Invalid age");
    }
  }
}

const person = new Person(25);
console.log(person.age);  // Output: 25 (uses getter)
person.age = 30;          // Uses setter
person.age = -5;          // Output: "Invalid age"

Quick Comparison
Public: Accessible from anywhere (this.name)
Private: Accessible only inside class (#name)
Use public for general data
Use private for sensitive or internal data

Best Practice Example:
class Employee {
  #salary;      // Private: sensitive data
  id;           // Public: safe to share

  constructor(id, salary) {
    this.id = id;
    this.#salary = salary;
  }

  giveRaise(amount) {
    if (amount > 0) {
      this.#salary += amount;
    }
  }

  getSalary() {
    return this.#salary;
  }
}

const emp = new Employee(101, 50000);
console.log(emp.id);          // 101
console.log(emp.getSalary()); // 50000
console.log(emp.#salary);     // ERROR! Private field

7. Static Variables and Methods
Static members belong to the class itself, not to individual objects (instances). They are shared across all instances and are called directly on the class.

Static Methods:
Use the static keyword before a method. It can only be called on the class, not on an object.
class MathHelper {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathHelper.add(2, 3));      // Output: 5
console.log(MathHelper.multiply(4, 5)); // Output: 20

const helper = new MathHelper();
// helper.add(2, 3); // ERROR! Static method cannot be called on an instance

Static Properties (Variables):
Use the static keyword before a property. It holds a value shared by all instances.
class Counter {
  static count = 0;  // Static property

  constructor() {
    Counter.count++; // Access via class name
  }

  static getCount() {
    return Counter.count;
  }
}

const c1 = new Counter();
const c2 = new Counter();
const c3 = new Counter();

console.log(Counter.getCount()); // Output: 3
console.log(Counter.count);      // Output: 3

Why Use Static?
Utility functions that do not need object data (MathHelper.add)
Shared state or counters across all instances (Counter.count)
Factory methods to create objects in a specific way

Real-World Example:
class User {
  static userCount = 0;  // Shared across all users

  constructor(name) {
    this.name = name;
    User.userCount++;
  }

  static getUserCount() {
    return User.userCount;
  }

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

const u1 = new User("Alice");
const u2 = new User("Bob");
const u3 = new User("Charlie");

u1.greet();                     // Hello, I am Alice
console.log(User.getUserCount()); // Output: 3
console.log(User.userCount);      // Output: 3

Quick Comparison
Instance Member: Belongs to the object (this.name, obj.greet())
Static Member: Belongs to the class (ClassName.property, ClassName.method())
Static members are shared across all instances
Static members cannot access instance properties directly (no this in static context)

Important Rule:
Inside a static method, this refers to the class itself, not an instance.
class Demo {
  static value = 10;

  static show() {
    console.log(this.value); // this refers to Demo class
  }
}

Demo.show(); // Output: 10