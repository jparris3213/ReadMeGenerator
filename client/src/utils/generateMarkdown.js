// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ((license = "Apache")) {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if ((license = "MIT")) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if ((license = "Mozilla Public License")) {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if ((license = "GNU")) {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if ((license = "The Unlicense")) {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  } else {
    return "To Author - Add License Badge manually";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ((license = "Apache")) {
    return "https://choosealicense.com/licenses/apache-2.0/";
  } else if ((license = "MIT")) {
    return "https://choosealicense.com/licenses/mit/";
  } else if ((license = "Mozilla Public License")) {
    return "https://choosealicense.com/licenses/mpl-2.0/";
  } else if ((license = "GNU")) {
    return "https://choosealicense.com/licenses/agpl-3.0/";
  } else if ((license = "The Unlicense")) {
    return "https://choosealicense.com/licenses/unlicense/";
  } else {
    return "To Author - Add License Badge manually";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if ((license = "Apache")) {
    return "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
  } else if ((license = "MIT")) {
    return "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
  } else if ((license = "Mozilla Public License")) {
    return "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.";
  } else if ((license = "GNU")) {
    return "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.";
  } else if ((license = "The Unlicense")) {
    return "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.";
  } else {
    return "No License Selected";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

# ${data[0]}

## Description
  ${data[1]}
  
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributions)
- [License](#license)
- [Tests](#test)
- [Questions](#questions)

## Installation

   ${data[2]}

## Usage
    ${data[3]}

### Video of Usage:

[Video of application](${data[4]})


## Contributions

   ${data[5]}

## License

## ${data[7]}
   ${renderLicenseBadge(data[7])}
   ${renderLicenseLink(data[7])}
   ${renderLicenseSection(data[7])}
        
## Tests

   ${data[6]}

## Contact

Please Contact Author using the following:
[Contact Link] ${data[8]}


##### made using the awesome README Generator at [Github](https://github.com/jparris3213/ReadMeGenerator)*
      `;
}

module.exports = generateMarkdown;
