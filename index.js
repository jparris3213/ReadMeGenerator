// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Welcome to the README Generator, \n We should get a title for your new  amazing project...',
    },
    {
        type: 'input',
        name: 'description',
        message: 'That is a cool title, what does it do?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Can I try it? How does someone else install it?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Anything I should know while using it? Like Dont cross the streams?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'So it looks like you misspelled a few comments, can I contribute a pull request? How?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Testing, 1 2 3, is this thing on? Any way I can run tests to make sure it is not broken?',
    }

    //TODO: Questions Needed: Project Title, Description, Installation Instructions, Usage Info
    //Questions Cont.: contribution guidelines, and test instructions

    //Sections: Descriptions, Installation, Usage, Contributing, Tests

    //choose license, badge added at top of readme and notice is added to License

    //Github UserName and Email for Section: Questions
];

inquirer
    .prompt(questions)
    .then((answers) => {
        const readmecontent = generateMarkdown(answers);
        fs.writeFile('README-test.md', readmecontent, (err) =>
            err ? console.log(err) : console.log(`Succcessfully created ReadMe with filename README-test.md`)
        );
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
