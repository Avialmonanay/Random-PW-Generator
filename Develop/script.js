// Password variables

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";


const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const inclower = document.getElementById("lower");
const incupper = document.getElementById("upper");



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
const writePassword = (length,characters) => {

  var password = "";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
