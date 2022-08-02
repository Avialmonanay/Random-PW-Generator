// Password variables

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const base = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";


const passwordText = document.getElementById("password");
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
    password += characters.charAt (Math.floor(Math.random() * characters.length));
  };
  return password;
  passwordText.value = password;
  console.log(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", () =>{ 
var characters = base;
incNumbers.checked ? (characters += numbers) : "";
incUpper.checked ? (characters += upper) : "";
incNumbers.checked ? (characters += symbols) : "";
passwordText.value = writePassword(length.value, characters);
});