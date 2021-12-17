var passwordStart = window.prompt("Please click on the Generate Password button!");
var passwordCharacters = window.prompt("Select your requirements.");

// prompt user to click on the writePassword button


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