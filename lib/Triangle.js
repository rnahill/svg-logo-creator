const Shape = require('./Shape');

class Triangle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor)
        this.textColor = textColor;
        this.text = text;

    }

    render() {
      return `<polygon points="200,10 250,210 160,210" fill="${this.shapeColor}"/>`;
    }

}

module.exports = Triangle;