// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
inquirer
.prompt([
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter Project Title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter description'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC'],
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter email address:',
      },
    ])

// TODO: Create a function to write README file
.then((answers) => {
    // Generate the HTML content using the user input
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${answers.projectTitle}</title>
      </head>
      <body>
        <h1>${answers.projectTitle}</h1>
        <p>Description: ${answers.description}</p>
        <p>Installation: ${answers.installation}</p>
        <p>Usage: ${answers.usage}</p>
        <p>Contributing: ${answers.contributing}</p>
        <p>Tests: ${answers.tests}</p>
        <p>License: ${answers.license}</p>
        <p>GitHub Username: ${answers.githubUsername}</p>
        <p>Email: ${answers.email}</p>
      </body>
      </html>
    `;

    // Write the HTML content to the index.html file
    fs.writeFile('index.html', htmlContent, (err) => {
      if (err) {
        console.error('Error writing index.html:', err);
      } else {
        console.log('index.html file written successfully.');
      }
    });
  });
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
