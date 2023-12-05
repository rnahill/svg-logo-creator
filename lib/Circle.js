const Shape = require('./Shape');

class Circle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor)
        this.textColor = textColor;
        this.text = text;

}

    render() {
      return `<circle cx="150" cy="100" r="80" fill= "${this.shapeColor}" />`;
    }

}

module.exports = Circle;