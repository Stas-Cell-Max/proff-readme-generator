// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (!license || license.toLowerCase() === 'none') {
      return ''; // Return an empty string if no license or 'None' is selected
    }
    // Map license names to corresponding badge URLs
    const licenseBadges = {
      mit: 'https://img.shields.io/badge/License-MIT-yellow.svg',
      apache: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      gpl: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
      bsd: 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
      // Add more licenses if needed
    };
    // Get the corresponding license badge URL based on the provided license
    const badgeUrl = licenseBadges[license.toLowerCase()];
  
    return badgeUrl ? `![License](${badgeUrl})` : '';
  }
  
// TODO: Create a function that returns the license link
      // Map license names to corresponding license URLs
  const licenseLinks = {
    mit: 'https://opensource.org/licenses/MIT',
    apache: 'https://opensource.org/licenses/Apache-2.0',
    gpl: 'https://www.gnu.org/licenses/gpl-3.0.html',
    bsd: 'https://opensource.org/licenses/BSD-3-Clause',
    // Add more licenses if needed
  };
  
  function renderLicenseLink(license) {
    if (!license || license.toLowerCase() === 'none') {
      return ''; // Return an empty string if no license or 'None' is selected
    }
    // Get the corresponding license URL based on the provided license
    const licenseUrl = licenseLinks[license.toLowerCase()];
  
    return licenseUrl ? `[License](${licenseUrl})` : '';
  }
  
// TODO: Create a function that returns the license section of README
      // Function to render the license section of README based on the provided license
      function renderLicenseSection(license) {
        console.log('Inside renderLicenseSection function');
        console.log('License received:', license);  // Add this line for debugging
      
        const badge = renderLicenseBadge(license);
        const link = renderLicenseLink(license);
        return `${badge}\n${link}`;
      }
  
// TODO: Create a function to generate markdown for README
  // Function to generate markdown for README
  function generateMarkdown(data) {
    // 
    
    const markdownContent = `
  # ${data.projectTitle}
  
  ## Description
  ${data.projectDescription}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installationInstructions}
  
  ## Usage
  ${data.usageInformation}
  
  ## License
  ![${data.license}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-blue)
  
  This project is covered under the ${data.license} license.
  
  ## Contributing
  ${data.contributionGuidelines}
  
  ## Tests
  ${data.testInstructions}
  
  ## Questions
  For additional questions, you can reach me at [GitHub](https://github.com/${data.githubUsername}) or by email at ${data.email}.
    `;
    return markdownContent;
  }
  
  module.exports = generateMarkdown;
  


