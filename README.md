# Password Generator

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


The Challenge should not produce any errors in the console when you inspect it using Chrome DevTools.
Deployment: 32%
Application deployed at live URL.
Application loads with no errors.
Application GitHub URL submitted.
GitHub repository that contains application code.

Application Quality: 15%
Application user experience is intuitive and easy to navigate.
Application user interface style is clean and polished.
Application resembles the mock-up functionality provided in the Challenge instructions.

Repository Quality: 13%
Repository has a unique name.
Repository follows best practices for file structure and naming conventions.
Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
Repository contains multiple descriptive commit messages.
Repository contains quality README file with description, screenshot, and link to deployed application.

How to Submit the Challenge
You are required to submit BOTH of the following for review:
The URL of the deployed application.
The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.





var writePassword = function ()  {
  var promptLength = window.prompt("Please choose a number between 8 and 128.");
  if (promptLength >=8 && x <=128) {
  console.log(promptLength);
  passwordCharacters();
} else {
  window.alert("Try again! Please choose a number between 8 and 128.");
  writePassword();
}



}

  if (passwordLength >=8 || <=128 ) {
    console.log(passwordLength);
    passwordCharacters();
  } else {
    window.alert("Try again! Please choose a number between 8 and 128.");
    startGenerator();
  }
//



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

passwordStart();