


// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Provide a description for your project:',
    },
    // Add more questions as needed
  ];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('README generated successfully!')
    );
  }
  
  // Start the README generator
  function init() {
    inquirer.prompt(questions).then((userInput) => {
      const markdown = generateMarkdown(userInput);
      writeToFile('README.md', markdown);
    });
  }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


