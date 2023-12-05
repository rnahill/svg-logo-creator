// Packages needed for application

const {generateShape} = require('./lib/generateShape')
// const { generateSVG } = require('./lib/generateSVG')
const inquirer = require('inquirer');
const fs = require('fs');


// Array of questions for user input
const logoOptions = [

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

// Function to create svg file

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {

        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File write successful.');
        }

    })
}



// Function to initialize app

async function init() {

    const responses = await inquirer.prompt(logoOptions);

    console.log(responses);
  
    generateShape();

}

init();


