const inquirer = require("inquirer");
const markdown = require("./assets/markdown");

console.log('Hi, welcome to The READEME Generator');

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
    name: 'projectTitle',
    message: 'What are the test instructions for your Project?',
  },

  //ReadME License Checkbox
  {
    type: "checkbox",
      name: "license",
      message: "What License would you like to display? (Check Only 1 Item)",
      choices: [
        "Standard License",
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

//Initiate the prompt of questions
inquirer.prompt(questions);

