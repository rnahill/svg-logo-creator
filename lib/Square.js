const Shape = require('./Shape');

class Square extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor)
        this.textColor = textColor;
        this.text = text;

}

    render() {
      return `<rect width="50" height="50" x="10" y="10" fill="${this.shapeColor}" />`;
    }

}

module.exports = Square;