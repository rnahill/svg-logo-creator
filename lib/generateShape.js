const shapesFile = require('./shapes.js');
import { Shapes } from './shapes.js';
import { Triangle } from './shapes.js';
import { Circle } from './shapes.js';
import { Square } from './shapes.js';


const generateShape = (text, textColor, logoColor, shape) => {
    
    const shape = new Shapes(shape);

    const generateTriangle = new Triangle(text, textColor, logoColor, shape);

    const generateCircle = new Circle(text, textColor, logoColor, shape);

    const generateSquare = new Square(text, textColor, logoColor, shape);
}

module.exports = generateShape;





