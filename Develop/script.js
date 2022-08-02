// Password variables

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const base = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";


const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const incUpper = document.getElementById("upper");



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
const writePassword = (length,characters) => {
  var password = "";
  for (let i = 0; i <length; i++) {
    password += characters.charAt(math.floor(math.random()*characters.length));
  };
  passwordText.value = password;
  console.log = Password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var characters = base;
incNumbers.checked ? (characters += numbers) : "";
incUpper.checked ? (characters += upper) : "";
incNumbers.checked ? (characters += symbols) : "";