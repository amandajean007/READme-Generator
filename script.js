const inquirer = require('inquirer');
const fs = require('fs');

console.log('Hello, welcome to the simple READme Generator!');

const questions = [
// Titles and internal titles
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    default: 'Teleportation Machine',
  },

// Description - the project's aim
{
  type: 'input',
  name: 'description',
  message: "What's your project's aim?",
  default: 'The projects aim is... ',
}, 

// Email
{
  type: 'input',
  name: 'email',
  message: 'What is your e-mail?',
  default: 'nerdbird112@gmail.com',
},

// Github Username
{
  type: 'input',
  name: 'github username',
  message: 'What is your Github username?',
  default: 'nerdbird112',
},

// Technologies
{
    type: 'checkbox',
    name: 'technologies',
    message: 'Which technologies did you use?',
    choices: [
      {
        name: 'HTML'
      },
      {
        name: 'Javascript'
      },
      {
        name: 'CSS'
      },
      {
        name: 'Bootstrap'
      },
      {
        name: 'Java'
      },
      {
        name: 'Python'
      },
      {
        name: 'C++'
      },
      {
        name: 'SQL'
      },
    ]
  },

// Installation
{
    type: 'input',
    name: 'installation',
    message: 'How do you launch your project?',
    default: 'Add this link to your browser on any computer or smart device to run the website URL.'
  },

// Table of contents ++++++++++ DIRECTORY BUTTON?
{
    type: 'input',
    name: 'tableOfContents',
    message: 'Enter a table of contents?',
   },

// Illustrations
{
    type: 'input',
    name: 'illustrations',
    message: 'Add a URL link for a screenshot image in between the square brackets',
    default: '![..]',
  },

// Scope of functionalities 
{
    type: 'input',
    name: 'scopeOfFunctionalities',
    message: 'What all does your project do specifically?',
    default: 'Takes you where ever you want in the matter of seconds!',
  },

// Examples of use
{
    type: 'input',
    name: 'examplesOfUse',
    message: 'What are some examples of use?',
    default: 'Going on vacation',
  },

// Project status 
{
    type: 'list',
    name: 'status',
    message: 'What is the status of your project?',
    choices: ['incomplete', 'in progress', 'complete'],
},

// License ++++++++++ADD BADGE
{
  type: 'list',
  name: 'license',
  message: 'What type of license would you like to have for your project?',
  choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License'],
},

// Sources
{
    type: 'input',
    name: 'sources',
    message: 'Which sources did you use?',
    default: 'Google',
}

];
 

 inquirer.prompt(questions)
  .then((answers) => {
  const filename = `1README.md`;

  const readMe = '# ' + answers.title + 
  '\n## Description\n' + answers.description + 
  '\n## Table of Contents\n' + answers.tableOfContents +
  '\n## Technologies\n' + answers.technologies + 
  '\n## License\n' + answers.licenses +
  '\n## Installation\n' + answers.installation +
  '\n## Illustrations\n' + answers.illustrations +
  '\n## Scope of Functionalities\n' + answers.scopeOfFunctinoalities +
  '\n## Examples of Use\n' + answers.examplesOfUse +
  '\n## Status\n' + answers.status +
  '\n## Sources\n' + answers.sources


    fs.writeFile(filename, readMe, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });