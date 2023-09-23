class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculator(figure) {
    if (figure instanceof Square) {
      return figure.side ** 2; // Area of a square
    } else if (figure instanceof Rectangle) {
      return figure.width * figure.height; // Area of a rectangle
    } else if (figure instanceof Circle) {
      return 2 ** Math.PI * figure.radius; // Area of a circle
    } else {
      throw new Error("Unsupported figure");
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculator(square));
console.log(AreaCalculator.calculator(rectangle));
console.log(AreaCalculator.calculator(circle));
