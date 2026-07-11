// Example 2: Duck Typing with Animals
class Dog {
    speak() {
        return "Woof!";
    }
}

class Cat {
    speak() {
        return "Meow!";
    }
}

class Duck {
    speak() {
        return "Quack!";
    }
}

// Polymorphic array - all have speak() method
let animals = [new Dog(), new Cat(), new Duck()];

animals.forEach(animal => {
    console.log(animal.speak());  // Same method call, different results
});
