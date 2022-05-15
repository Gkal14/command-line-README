// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `# ${answer.title}
## Description

${answer.description}

## Table of Contents
-[Description](#description) <br />
-[Installation](#installation) <br />
-[Usage](#usage) <br />
-[Contribution](#contribution) <br />
-[Tests](#tests) <br />
-[Questions](#questions) <br />
## Installation
${answer.installation}
## Licence
${(answer.licence)}
## Usage
${answer.usage}
## Contribution
${answer.contribution}
## Tests
${answer.tests}
## Questions
${answer.username}, ${answer.email}

If you have any further questions, please reach out to me at https://github.com/Gkal14 <br>
or by email at georgekaluwin@gmail.com
`;
}

module.exports = generateMarkdown;
