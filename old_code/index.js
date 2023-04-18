// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../client/src/utils/generateMarkdown');
const questions = require('./utils/questions')



const inquire_User = () => {
    return inquirer
    .prompt(questions)
} 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const file = fs;
    file.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    console.log(`Welcome to the M.L.R.M.G`)
    inquire_User()
    .then((answers) => writeToFile('./ReadMeOutput/README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully Wrote README.md'))
    .catch((err) => console.error(err));

}

// Function call to initialize app
init();
