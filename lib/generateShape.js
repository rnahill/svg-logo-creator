const Shape = require('./Shape');
const Triangle = require('./Triangle');
const Circle = require('./Circle');
const Square = require('./Square');
const responses = require('../index')
const init = require('../index');

console.log(responses)

// function generateShape (text, textColor, logoColor, shapeType) {
    
//     const shape = new Shape(shapeType);

//     let generatedShape;
//     switch (shapeType) {
//         case 'triangle':
//             generatedShape = new Triangle(text, textColor, logoColor, shape);
//             break;
//         case 'circle':
//             generatedShape = new Circle(text, textColor, logoColor, shape);
//             break;
//         case 'square':
//             generatedShape = new Square(text, textColor, logoColor, shape);
//              break;
//          default:
//              console.error('Invalid shape type');
//              return null;
//     }

//   return generatedShape;
// };


async function generateShape () {

    let generatedShape;

    if (responses.shape === 'triangle') {

        generatedShape = new Triangle(responses.shapeColor, responses.textColor, responses.text);

    } else if (responses.shape === 'circle'){

        generatedShape = new Circle(responses.shapeColor, responses.textColor, responses.text);

    } else if (responses.shape === 'square'){

        generatedShape = new Square(responses.shapeColor, responses.textColor, responses.text);

    } else {
        console.log('Invalid shape');
    }

    return generatedShape;
}

module.exports = {
    generateShape
};


