class Shapes {
    constructor(triangle, circle, square) {
        this.triangle = triangle;
        this.circle = circle;
        this.square = square;

    }

}

class Triangle {
    constructor(characters, textColor, logoColor, triangle) {
    Shapes.call(this, triangle);
    this.characters = characters;
    this.textColor = textColor;
    this.logoColor = logoColor;
    
    }

}

class Circle {
    constructor(characters, textColor, logoColor, circle) {
    Shapes.call(this, circle);
    this.characters = characters;
    this.textColor = textColor;
    this.logoColor = logoColor;

    }

}

class Square{
    constructor(characters, textColor, logoColor, square) {
        Shapes.call(this, square);
        this.characters = characters;
        this.textColor = textColor;
        this.logoColor = logoColor;
        
    }
}

