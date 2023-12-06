
//base Shape Class
class Shape {
    constructor() {
      this.color = "";
    }
    // Function to set color
    setColor(color) {
      this.color = color;
    }
  }
  
  
  class Circle extends Shape {
    //Function to render circle, returning code needed for SVG
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    //Function to render triangle, returning code needed for SVG
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    //Function to render square, returning code needed for SVG
    render() {
      return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
  }
  
  //Exports
  module.exports = { Circle, Triangle, Square };
