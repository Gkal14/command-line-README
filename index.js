// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = ['Project Title: ','Description: ', 'Github Username: ', 'Email: ', 'Installation Instructions: ', 'License: ', 'Usage Info: ', 'Test Instructions: ', 'Contribution Guidelines: '];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName = fileName + '.md'
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log(`${fileName} successful`));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'Project Title',
            message: 'what is the project title?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Give a brief description of your project: ',
        },
        {
            type: 'input',
            name: 'Username',
            message: 'Enter your Github username: ',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'enter your email: ',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions: ',
        },
        {
            type: 'list',
            name: 'License',
            message: 'Choose the license used for this project: ',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'What will this project be used for?',
        },
        {
            type: 'input',
            name: 'Contributors',
            message: 'Name your project contributors: ',
        },
        {
            type: 'input',
            name: 'Test',
            message: 'What commands are run in order to test the project?',
        }
    ]).then((data) => {
        console.log('README generating...')
        markdownData = generateMarkdown(data)
        console.log(`Successfully generate markdown data.
		Generating README file ...`)
        writeToFile(data.filename,markdownData)
    })
    
}

// Function call to initialize app
init();
