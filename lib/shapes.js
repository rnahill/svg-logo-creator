export class Shapes {
    constructor(triangle, circle, square) {
        this.triangle = triangle;
        this.circle = circle;
        this.square = square;

    }

}

export class Triangle {
    constructor(text, textColor, logoColor, triangle) {
    Shapes.call(this, triangle);
    this.text = text;
    this.textColor = textColor;
    this.logoColor = logoColor;

    }

}

export class Circle {
    constructor(text, textColor, logoColor, circle) {
    Shapes.call(this, circle);
    this.text = text;
    this.textColor = textColor;
    this.logoColor = logoColor;

    }

}

export class Square{
    constructor(text, textColor, logoColor, square) {
        Shapes.call(this, square);
        this.text = text;
        this.textColor = textColor;
        this.logoColor = logoColor;
        
    }
}

module.exports = Shapes;
module.exports = Triangle;
module.exports = Circle;
module.exports = Square;