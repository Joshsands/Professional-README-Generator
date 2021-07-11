// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "project_title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "project_description",
      message: "Describe your project",
    },
    {
      type: "input",
      name: "project_installation",
      message: "What installations are required?",
    },
    {
      type: "input",
      name: "project_usage",
      message: "What is this application used for?",
    },
    {
      type: "input",
      name: "project_contribution",
      message: "Whare are the guidelines for contribution?",
    },
    {
      type: "input",
      name: "project_test",
      message: "Whare are the testing instructions?",
    },
    {
      type: "checkbox",
      name: "project_license",
      message: "Choose your license?",
      choices: ["MIT", "GNU-GPL-v3", "Apache", "Unlicensed"],
    },
    {
      type: "input",
      name: "project_github",
      message: "Enter your GitHub username",
    },
    {
      type: "input",
      name: "project_email",
      message: "Enter your email address",
    },
  ]);
};
promptUser().then((data) => {
  const readme = generateMarkdown(data);

  return fs.writeFile("../dist/README.md", readme, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Your README has been created!");
  });
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();
