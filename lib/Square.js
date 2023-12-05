const Shape = require('./Shape');

class Square extends Shape {
    constructor(color) {
        super(color)

    }

    render() {
      return `<rect width="50" height="50" x="10" y="10" fill="${this.color}" />`;
    }

}

module.exports = Square;