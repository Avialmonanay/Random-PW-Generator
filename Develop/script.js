// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = prompt("Choose password length between 8 and 128")

  console.log ("Generate Button Selected.")
  console.log (length)
  console.log (password)
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
