// Packages needed for application


// const { generateSVG } = require('./lib/generateSVG')
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Circle, Triangle, Square } = require('./Shape')
const SVG = require('./generateSVG')
 
class CLIprompts {
    run() {
        return inquirer.prompt(
            [

                {
                    type: 'input',
                    message: 'Enter up to 3 characters for logo text.',
                    name: 'text'
                },
            
                {
                    type: 'input',
                    message: 'Enter a color keyword or hexadecial number to pick a color for the logo text.',
                    name: 'textColor'
                },
            
                {
                    type: 'list',
                    message: 'Choose a shape from the following options:',
                    choices: ['triangle', 'circle', 'square'],
                    name: 'shape'
                },
            
                {
                    type: 'input',
                    message: 'Enter a color keyword or hexadecial number to pick a color for the logo shape.',
                    name: 'shapeColor'
                }
            
            ]
        ).then(({
            text, textColor, shape, shapeColor
        }) => {
            let shapeType;
            switch(shape) {
                case 'circle':
                    shapeType = new Circle();
                    break;
                case 'square':
                    shapeType = new Square();
                    break;    
                default:
                    shapeType = new Triangle();
                    break;
            }
            shapeType.setColor(shapeColor);

            const svg = new SVG();
            svg.setText(text, textColor);
            svg.setShape(shapeType);
            return writeFile('logo.svg', svg.render())
        })
    }
}
module.exports = CLIprompts;