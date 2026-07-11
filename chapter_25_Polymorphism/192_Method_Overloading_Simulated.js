// Example 6: Simulating Method Overloading in JS
class Calculator {
    // Using rest parameters to handle any number of arguments
    add(...numbers) {
        return numbers.reduce((sum, num) => sum + num, 0);
    }
}

let calc = new Calculator();
console.log("add(5, 10):", calc.add(5, 10));              // 15
console.log("add(5, 10, 20):", calc.add(5, 10, 20));      // 35
console.log("add(5, 10, 20, 30):", calc.add(5, 10, 20, 30));  // 65

// Alternative: Checking arguments
class Printer {
    print(message, copies) {
        if (copies === undefined) {
            console.log(message);  // Single print
        } else {
            for (let i = 0; i < copies; i++) {
                console.log(`${i + 1}: ${message}`);  // Multiple copies
            }
        }
    }
}

let printer = new Printer();
console.log("\nSingle print:");
printer.print("Hello World");

console.log("\nMultiple copies:");
printer.print("Hello World", 3);
