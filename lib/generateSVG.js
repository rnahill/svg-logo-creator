
//SVG Class used to render SVG code
class SVG {
    constructor() {
      this.textEl = "";
      this.shapeEl = "";
    }
  
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
    }
  
    // Create setText() function
    setText(message, color) {
      // If statement confirming length of input
      if (message.length > 3) {
        throw new Error("Must not be more than 3 characters.");
      }
      this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
    }
    
    // Create setShape() function
    setShape(shape) {
      this.shapeEl = shape.render();
    }
  }
  // Exports 
  module.exports = SVG;