console.log("hello");
var Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Lower = "abcdefghijklmnopqrstuvwxyz"; 

// prompt user to click on the writePassword button
var passwordStart = window.alert("Please click on the Generate Password button!");


//user clicks on the Generate Password button
var writePassword = function ()  {
  //prompt user to choose the password length, then capture that number and it will be
  //referenced later to set the random number of characters generated
  var promptLength = window.prompt("Please choose a number between 8 and 128.");
  if (promptLength >=8 && promptLength <=128) {
  console.log(promptLength);
  passwordCharacters();
} else {
  window.alert("Try again! Please choose a number between 8 and 128.");
  writePassword();
}
//prompt the user to choose password criteria
var passwordCharacters = function() {
  var promptUppers = window.prompt("Would you like to include uppercase letters?");

  //if user wants uppercase then store that and include the Upper variable in the generation
  if (promptUppers) {
    console.log(promptUppers);
    var storeUpper = document.querySelector("upper");
  }
  }
  //if user does NOT want uppercase then only include the Lower array in the generate
};

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
