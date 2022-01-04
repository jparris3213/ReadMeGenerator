const inquirer = require("inquirer");

//Housekeeping
const first_round_questions = [
  //First Round of Questions Needed

  //Title and one line Description
  //Title Question

  {
    type: "input",
    name: "title",
    message: "We should get a title for your new  amazing project...",
  },
  //What's your elevator pitch (one line) description?
  {
    type: "input",
    name: "pitch",
    message: "Thats a cool name, but what does it do? (Elevator Pitch)",
  },
  {
    type: "input",
    name: "problem_to_solve",
    message: "What does it solve?",
  },
  {
    type: "checkbox",
    name: "techstack",
    message: "What technologies were used?",
    choices: [
      new inquirer.Seperator(`--Basics--`),
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "Javascript",
      },
      new inquirer.Separator(`--Backend--`),
      {
        name: "Node.js",
      },
      {
        name: "SQL",
      },
      {
        name: "Mongo.DB",
      },
    ],
  },
];

const second_round_questions = [
  //Step questions with recursive question set up

  {
    type: "input",
    name: "install_step",
    message: "What are the steps to install and run this app?",
  },
  {
    type: "confirm",
    name: "add_step",
    message: "Are there additional steps (Press Enter to add another step)",
    default: true,
  },
]

//Long Form Description with multiple part questions
//
//Second Round of questions Needed

//Questions that need Multiple Parts

//Export info
