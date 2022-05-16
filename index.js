// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create a function to initialize app
const questions = [
    {
      type: "input",
      name: "github",
      message: "What is your Github username?"
    }, {
      type: "input",
      name: "email",
      message: "What is your email address?"
    },
    {
      type: "input",
      name: "title",
      message: "What is the name of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a description of your project:"
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide installation instructions:",
      default: "npm install"
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?",
      default: "npm test"
    },
    {
      type: "input",
      name: "usage",
      message: "What is your project used for?",
    },
    {
      type: "input",
      name: "contributing",
      message: "Who are the contributors of this project?",
    }
  ];
  
  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  function init() {
    inquirer.prompt(questions)
      .then((inquirerResponses) => {
        console.log("README successfully generated!");
        writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
      })
     
  }
// Function call to initialize app
init();
