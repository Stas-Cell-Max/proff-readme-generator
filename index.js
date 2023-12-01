


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


  {
    type: 'input',
    name: 'demo',
    message: 'Can you provide a link to the demo of your project? (optional)',
  },

  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How should your project be used?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What is the license for your project?',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What tests are included in your project?',
  },
  {
    type: 'input',
    name: 'references',
    message: 'Are there any references or resources you would like to include?',
  },
  {
    type: 'input',
    name: 'deployment',
    message: 'Provide the link with the project deployed?',
  },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README generating compelete!');
    }
  });
}
  
  // Start the README generator
  function init() {
    inquirer.prompt(questions).then((userInput) => {
      const markdown = generateMarkdown(userInput);
      writeToFile('README.md', markdown);
    });
  }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((userInput) => {
    console.log('Inside inquirer.then block');
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
console.log('Before init function call'); // Add this line for debugging
init();
console.log('After init function call'); // Add this line for debugging


