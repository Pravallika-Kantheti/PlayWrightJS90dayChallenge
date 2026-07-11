// Example 4: Polymorphism with Shapes
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
    
    getName() {
        return "Rectangle";
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    
    getName() {
        return "Circle";
    }
}

class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    
    getArea() {
        return 0.5 * this.base * this.height;
    }
    
    getName() {
        return "Triangle";
    }
}

// Polymorphic function - works with any shape
function printArea(shape) {
    console.log(`${shape.getName()} Area: ${shape.getArea()}`);
}

printArea(new Rectangle(10, 5));    // Rectangle Area: 50
printArea(new Circle(5));           // Circle Area: 78.54...
printArea(new Triangle(10, 5));     // Triangle Area: 25
