// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    var urlParse = license.replace(/ /g, "%20")
		return `![License](https://img.shields.io/badge/license-${urlParse}-lightblue)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'None')
  return  `* [License](#license)`
else
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "None") {
      return (
        `## License
  This project is licensed under the ${license} license.`
      )
    }
    return ''
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`
## Usage
${data.usage}
${renderLicenseSection(data.license)}
  
## Contributing
${data.contributing}
## Tests
To run tests, run the following command:
\`\`\`
${data.test}
\`\`\`
## Questions
If you have any questions about please contact me at [${data.github}](https://github.com/${data.github}/) 
or by email on ${data.email}
`;
}

module.exports = generateMarkdown;
