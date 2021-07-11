// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  for (let i = 0; i < license.length; i++) {
    if (license[i] === "MIT") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license[i] === "GNU-GPL-v3") {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (license[i] === "Apache") {
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license[i] === "Unlicensed") {
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    } else {
      return ``;
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
// LINK IS INCLUDED IN renderLicenseBadge function

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  for (let i = 0; i < license.length; i++) {
    if (license[i] === "MIT") {
      return `
Copyright ${new Date().getFullYear()}
The source code for the site is licensed under the MIT license and can be found at the link below:
[License Info Link](https://opensource.org/licenses/MIT)
      `;
    } else if (license[i] === "GNU-GPL-v3") {
      return `
Copyright ${new Date().getFullYear()}
The source code for the site is licensed under the GNU-GPL-v3 license and can be found at the link below:
[License Info Link](https://www.gnu.org/licenses/gpl-3.0)
      `;
    } else if (license[i] === "Apache") {
      return `
Copyright ${new Date().getFullYear()}
The source code for the site is licensed under the Apache license and can be found at the link below:
[License Info Link](https://opensource.org/licenses/Apache-2.0)
      `;
    } else if (license[i] === "Unlicensed") {
      return `
Copyright ${new Date().getFullYear()}
The source code for the site is licensed under the Unlicensed license and can be found at the link below:
[License Info Link](https://unlicense.org/)
      `;
    } else {
      return ``;
    }
  }
}

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
${renderLicenseSection(data.project_license)}

## Questions?
* Find me on Github at [${data.project_github}](http://github.com/${
    data.project_github
  })
* E-mail me at ${data.project_email}.
`;
}

module.exports = generateMarkdown;
