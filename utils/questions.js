const inquirer = require("inquirer");

//Housekeeping
const first_round_questions = [
  //First Round of Questions Needed

  //Title and one line Description
  {
    type: "input",
    name: "title",
    message: "What title should this new awesome application have?",
  },
  //What's your elevator pitch (one line) description?
  {
    type: "input",
    name: "description",
    message: "Thats a cool name, but what does it do? Describe it for others",
  },
  {
    type: "input",
    name: "install",
    message: "How do you Install this grand application, if needed",
  },
  {
    type: "input",
    name: "usage",
    message: "How is this meant to be used?",
  },
  { type: "input",
    name: "videoexample",
    message: "Is there a video link to view the application in action?"},
  {
    type: "input",
    name: "contribute",
    message:
      "For anyone trying to contribute, what criteria would you like them to abide by?",
  },
  {
    type: "input",
    name: "tests",
    message: "Are their any tests that go with this application?",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Select License",
    choices: [
      {
        name: "Apache",
      },
      {
        name: "Mozilla Public License",
      },
      {
        name: "GNU",
      },
      {
        name: "MIT",
      },
      {
        name: "The Unlicense"
      }
    ]
  },
  {
    type: 'input',
    name: 'contact',
    message: 'How would you like to be contacted? (Please provide Email/LinkedIn/Github Link)'
  },
];



//Long Form Description with multiple part questions
//
//Second Round of questions Needed

//Questions that need Multiple Parts

//Export info
module.exports = first_round_questions;