const Shape = require('./Shape');

class Triangle extends Shape {
    constructor(color) {
        super(color)

    }

    render() {
      return `<polygon points="200,10 250,210 160,210" fill="green"/>`;
    }

}

module.exports = Triangle;