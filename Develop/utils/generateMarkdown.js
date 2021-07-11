// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ((license = "MIT")) {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project_title}

## License
${renderLicenseBadge(data.project_license)}

## Table of Contents
1. [Project Description](#project-description)
2. [Installation Instructions](#installation-instructions)
3. [Usage Information](#usage-information)
4. [Contributor Guidelines](#contributor-guidelines)
5. [Testing Instructions](#testing-instructions)
6. [License Info](#license-info)
7. [Questions](#questions)

## Project Description
* ${data.project_description}

## Installation Instructions
* ${data.project_installation}

## Usage Information
* ${data.project_usage}

## Contributor Guidelines
* ${data.project_contribution}

## Test Instructions
* ${data.project_test}

## License Info
* ${data.project_test}

## Questions?
* Find me on Github at [${data.project_github}](http://github.com/${
    data.project_github
  })
* E-mail me at ${data.project_email}.
`;
}

module.exports = generateMarkdown;
