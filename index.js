// Packages needed for application
const inquirer = require('inquirer');


// Array of questions for user input
const logoOptions = [

    {
        type: 'input',
        message: 'Enter up to 3 characters for logo text.',
        name: 'characters'
    },

    {
        type: 'input',
        message: 'Enter a color keyword or hexadecial number to pick a color for the logo text.',
        name: 'textColor'
    },

    {
        type: 'input',
        message: 'Choose a shape from the following options: circle, triangle, square',
        name: 'shape'
    },

    {
        type: 'input',
        message: 'Enter a color keyword or hexadecial number to pick a color for the logo shape.',
        name: 'shapeColor'
    }

]

// function to initialize app

async function init() {

    const responses = await inquirer.prompt(logoOptions);

}

// Function call to start application

init();