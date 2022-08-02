// Password variables set in a string base is the defualt and always selected.
const base = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";




// Id's that are pulled from the HTML and made available to JS
const passwordText = document.getElementById("password");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const incUpper = document.getElementById("upper");
const copyBtn = document.getElementById("copy");
var generateBtn = document.querySelector("#generate");



// generate password based on random math and allowed charectars - Write password to the #password input
const writePassword = (length,characters) => {
  
  var password = "";
  for (let i = 0; i <length; i++) {
    password += characters.charAt (Math.floor(Math.random() * characters.length));
  };
  return password;

}

// Event Listener for Generate Button. Takes into account checked boxes and adds their strings as values to the base string.
generateBtn.addEventListener("click", () =>{ 
var characters = base;
incNumbers.checked ? (characters += numbers) : "";
incUpper.checked ? (characters += upper) : "";
incNumbers.checked ? (characters += symbols) : "";
passwordText.value = writePassword(length.value, characters);
});

// Event Listener for Copy button.
copyBtn.addEventListener("click", () => {
  passwordText.select();
  document.execCommand("copy");
  alert("Password Copied");
});

