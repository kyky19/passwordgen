var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var special = "!@#$%^&*+"
var userChoices = ""
var randomPassword = ""
var passwordLength = 0

function userInputLength() {
  passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Your password must be between 8 and 128 characters");
      userInputLength();
    } else { 
      console.log(passwordLength);
  }
  charTypeConfirm();
};

function charTypeConfirm() {
  var lowerCaseChoice = (confirm("Would you like your password to contain Lowercase Letters?"));
  var upperCaseChoice = (confirm("Would you like your password to contain Uppercase Letters?"));
  var numbersChoice = (confirm("Would you like your password to contain Numbers?"));
  var specialChoice = (confirm("Would you like your password to contain Special Characters?"));
    
  if (lowerCaseChoice === !true && upperCaseChoice === !true && numbersChoice === !true && specialChoice === !true) { 
      userChoices = alert("You must confirm at least one character type!")
      charTypeConfirm();
    }
    if (lowerCaseChoice) {
      userChoices += lowerCase
    }

    if (upperCaseChoice) {
      userChoices += upperCase
    }

    if (numbersChoice) {
      userChoices += numbers
    }

    if (specialChoice) {
      userChoices += special
    }
    console.log(userChoices);

    generatePassword();
  }; 
  
function generatePassword() {
  for (var i = 0; i < passwordLength; i++) {
    var pwGen = userChoices[Math.floor(Math.random() * userChoices.length)]
    randomPassword += pwGen;
  }
    
  window.alert("Your password is " + randomPassword + "");
};

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", userInputLength);
