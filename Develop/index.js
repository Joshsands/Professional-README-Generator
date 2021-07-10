// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project-title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'project-description',
            message: 'Describe your project' 
        },
        {
            type: 'input',
            name: 'project-installation',
            message: 'What installations are required?' 
        },
        {
            type: 'input',
            name: 'project-useage',
            message: 'What is this application used for?' 
        },
        {
            type: 'input',
            name: 'project-contribution',
            message: 'Whare are the guidelines for contribution?' 
        },
        {
            type: 'input',
            name: 'project-test',
            message: 'Whare are the testing instructions?' 
        },
        {
            type: 'checkbox',
            name: 'project-license',
            message: 'Choose your license?',
            choices: [
                ['MIT License', 'Other License']
            ] 
        },
        {
            type: 'input',
            name: 'project-github',
            message: 'Enter your GitHub username' 
        },
    ])
}
promptUser();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();
