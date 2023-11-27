


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
      name: 'license',
      message: 'What is the license for your project? (e.g., MIT, Apache, GPL)',
    },
    // Add more questions as needed
  ];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  //console.log('Inside writeToFile function');
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README generated successfully!');
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
  console.log('Inside init function');
  inquirer.prompt(questions).then((userInput) => {
    console.log('Inside inquirer.then block');
    const markdown = generateMarkdown(userInput);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
console.log('Before init function call'); // Add this line for debugging
init();
console.log('After init function call'); // Add this line for debugging


