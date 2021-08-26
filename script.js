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

// License
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
  let badge = "";

  if (answers.license === "Apache License 2.0") {
    badge =  `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (answers.license === "GNU General Public License v3.0") {
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }

  const readMe = '# ' + answers.title + 
  '\n## Description <a name="description"></a>\n' + answers.description + 
  '\n## Table of Contents\n' + 
  '1. [Description](#description)\n' +
  '2. [Technologies](#technologies)\n' +
  '3. [License](#license)\n' +
  '4. [Installation](#installation)\n' +
  '5. [Illustrations](#illustrations)\n' +
  '6. [Scope of Functionalities](#functionalities)\n' +
  '7. [Examples of Use](#examples)\n' +
  '8. [Status](#status)\n' +
  '9. [Sources](#sources)' +
  '\n## Technologies <a name="technologies"></a>\n' + answers.technologies + 
  '\n## License <a name="license"></a>\n' + badge +
  '\n## Installation <a name="installation"></a>\n' + answers.installation +
  '\n## Illustrations <a name="illustrations"></a>\n' + answers.illustrations +
  '\n## Scope of Functionalities <a name="functionalities"></a>\n' + answers.scopeOfFunctinoalities +
  '\n## Examples of Use <a name="examples"></a>\n' + answers.examplesOfUse +
  '\n## Status <a name="status"></a>\n' + answers.status +
  '\n## Sources <a name="sources"></a>\n' + answers.sources


    fs.writeFile(filename, readMe, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });