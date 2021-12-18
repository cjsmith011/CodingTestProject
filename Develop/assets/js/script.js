console.log("hello");

var Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var Special = ["!", "#", "$", "@", "%", "&", "*", "~", "+", "*", "/", ",", "-"]
var Numbers = ["1", "2", "3", "4", "4", "6", "7", "8", "9", "0"]

// prompt user to click on the writePassword button
var passwordStart = window.alert("Please click on the Generate Password button!");


//user clicks on the Generate Password button
function passwordCriteria ()  {
  //prompt user to choose the password length, then capture that number and it will be
  //referenced later to set the random number of characters generated
  var promptLength = window.prompt("Please choose a number between 8 and 128.");
  if (promptLength >=8 && promptLength <=128) {
  console.log(promptLength);
} else {
  window.alert("Try again! Please choose a number between 8 and 128.");
  passwordCriteria();
}
//prompt the user to indicate if they want to include uppercase letters
var confirmUppers = confirm("Would you like to include uppercase letters?");
//prompt the user to indicate if they want to include numbers included
var confirmNumbers = confirm("Include numbers?");
//prompt the user to indicate if they want to include special characters
var confirmSpecial = confirm("How about special characters?");
//prompt the user to indicate if they want to include lowercase letters
var confirmLowers = confirm( "Should we include lowercase letteres?");
//restart all of the above confirms if the user doesn't select ANY of them
if (confirmUppers === false && confirmNumbers === false && confirmSpecial === false && confirmLowers === false) {
  alert("You need to select at least 1 character option!");
  return null;
}
  var actualPassword = {
    promptLength: promptLength, 
    confirmUppers: confirmUppers,
    confirmLowers: confirmLowers,
    confirmNumbers: confirmNumbers, 
    confirmSpecial: confirmSpecial,
    
  };
  return actualPassword;

  function randomIndex(arr) {
    var indexNum = Math.floor(Math.random() * arr.length);
    var randElement = arr[indexNum];
    return randElement;

  }
  function generatePassword() {
    var option = passwordCriteria();
    //where we store password as concatenated
    var results= [];
    //store the types of characters to include: upper, lower, etc
    var possibleCharacters = [];
    //contain at least one of each to fulfill the requirements
    var minimumGuarantee= [];
    if (!actualPassword) return null;

    if (option.confirmUppers) {
      possibleCharacters = possibleCharacters.concat[Upper];
      minimumGuarantee.push(randomIndex(Upper))

    } 
    //3 more ifs for the other variables
    //
    for (var i = 0; i <option.length; i++) {
      var possibleCharacter = randomIndex(possibleCharacters);
      results.push(possibleCharacter);
    }
    for (var i = 0; i <minimumGuarantee.length; i++) {
      results[i] = minimumGuarantee[i];
    }
    return results.join("");
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", passwordCriteria);
