const inquirer = require("inquirer");
var fs = require('fs');

console.log('Hi, welcome to The READEME Generator');

//Creates the Array if Question Prompts
const questions = [

  //ReadME Project Title Prompt
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the title for your Project?',
  },

  //ReadME Project Description Prompt
  {
    type: 'input',
    name: 'projectDescription',
    message: 'What is the description of your Project?',
  },

  //ReadME Project Installation Instructions Prompt
  {
    type: 'input',
    name: 'projectInstallInstuctions',
    message: 'What are the Installation Instructions for your Project?',
  },

  //ReadME Usage Information Prompt
  {
    type: 'input',
    name: 'projectUsageInformation',
    message: 'What is the Usage Information for your Project?',
  },
  
  //ReadME Contribution Guidlines Prompt
  {
    type: 'input',
    name: 'projectContribution',
    message: 'What are the Contribution Guidelines for your Project?',
  },

  //ReadME Test Instructions Prompt
  {
    type: 'input',
    name: 'projectTest',
    message: 'What are the test instructions for your Project?',
  },

  //ReadME License Checkbox
  {
    type: "checkbox",
    name: "license",
    message: "What License would you like to display? (Check Only 1 Item)",
    choices: [
        "MIT License",
        "No License",
    ]},

    //GitHub Username Prompt
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub Username?',
  },

   //GitHub Email Address Prompt
   {
    type: 'input',
    name: 'githubEmail',
    message: 'What is your GitHub Email Address?',
  },

]

//License selection function
function licenseSelection(license) {
    if (`${license}` == "MIT License") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (`${license}` == "No License") {
        return "Unlicensed";
    }
}

//Generates Markdown with input values from questions
function Markdown(input) {
    return `
#License
${licenseSelection(input.license)}
# ${input.projectTitle}       
# Description
${input.projectDescription}
# Table of Contents
[Installation](#Installation)<br>
[Usage](#Usage)<br>
[Contributors](#Contributing)<br>
[Test](#Test)<br>
[Questions](#Questions)<br>
# Installation
${input.projectInstallInstuctions}
# Usage
${input.projectUsageInformation}
# Contributing
${input.projectContribution}
# Tests
${input.projectTest}
# Questions
Created by ${"https://github.com/" + input.githubUsername}
<br>
Have more questions? Email me at: ${input.githubEmail}
    `;
}

//Function to generate README file
inquirer.prompt(questions).then((input) => {
    fs.writeFile("Generated_README.md", Markdown(input),
        (err) => (err ? console.log(err) : console.log("Your README File has been generated"))
)});

    //     fs.writeFile('README.MD', function (err) {
//         if (err) throw err;
//         console.log('Replaced!');
//       });
// });

// fs.writeFile('READEME.MD', function (err) {
//     if (err) throw err;
//     console.log('Your README File has been Generated!');
//     })
// });

function file() {}

//Initiate the prompt of questions
file();
