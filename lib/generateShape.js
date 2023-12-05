const Shape = require('./Shape');
const Triangle = require('./Triangle');
const Circle = require('./Circle');
const Square = require('./Square');
const responses = require('../index');


async function generateShape () {

    console.log(responses);

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

    //return generatedShape;

    console.log(generatedShape);

    console.log(responses.shape);
    
}

module.exports = {
    generateShape
};


