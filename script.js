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

// Introduction - the project's aim
{
    type: 'input',
    name: 'introduction',
    message: "What's your project's aim?",
    default: 'The projects aim is... ',
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

// Launch
{
    type: 'input',
    name: 'launch',
    message: 'How do you launch your project?',
    default: 'Add this link to your browser on any computer or smart device to run the website URL.'
  },

// Table of contents
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
  const filename = `README.md`;
  const readMe = '# ' + answers.title + 
  '\n## Introduction\n' + answers.introduction + 
  '\n## Technologies\n' + answers.technologies + 
  '\n## Launch\n' + answers.launch +
  '\n## Table of Contents\n' + answers.tableOfContents +
  '\n## Illustrations\n' + answers.illustrations +
  '\n## Scope of Functionalities\n' + answers.scopeOfFunctinoalities +
  '\n## Examples of Use\n' + answers.examplesOfUse +
  '\n## Status\n' + answers.status +
  '\n## Sources\n' + answers.sources


    fs.writeFile(filename, readMe, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });