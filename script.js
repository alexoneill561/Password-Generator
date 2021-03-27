// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var characterSet = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var characterLength = prompt("How many characters would you like to use in new password? Must be between 8 and 128 charcters.");
  var lowerCaseCharacter = prompt("Would you like to use lowercase characters in new password?");
  var upperCaseCharacter = prompt("Would you like to use uppercase characters in your new password?");
  var numberCharacters = prompt("Would you like to use numbers in your new password?");
  var specialCharacters = prompt("Would you like to use special characters in new password?");

  console.log(characterLength);
  console.log(lowerCaseCharacter);
  console.log(upperCaseCharacter);
  console.log(numberCharacters);
  console.log(specialCharacters);

  if (confirm("Would you like to use uppercase characters in your new password?")) {
    select = select.concat(upperCaseArray);
  }

  if (confirm("Would you like to use lowercase characters in new password?")) {
    select = select.concat(lowerCaseArray);

  if (confirm("Would you like to use numbers in your new password?")) {
    select = select.concat(numbersArray);
  }
  
  if (confirm("Would you like to use special characters in new password?")) {
    select = select.concat(specialArray);
  }

  var randomPassword = [];
  for (var i = 0; i < characterLength; i++) {
    
  }

}

generateBtn.addEventListener("click", writePassword);