const init = require('../index');
const shapesFile = require('./shapes')

// import('../index')
// import('./shapes');

// await init;


function generateShape (text, textColor, logoColor, shapeType) {
    
    const shape = new Shapes(shapeType);

    let generatedShape;
    switch (shapeType) {
        case 'triangle':
            generatedShape = new Triangle(text, textColor, logoColor, shape);
            break;
        case 'circle':
            generatedShape = new Circle(text, textColor, logoColor, shape);
            break;
        case 'square':
            generatedShape = new Square(text, textColor, logoColor, shape);
             break;
         default:
             console.error('Invalid shape type');
             return null;
    }

  
    //return generatedShape;
};



// // Export the generateShape function
// export default generateShape;
module.exports = {
    generateShape
};


