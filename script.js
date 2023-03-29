// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Genereator Function
function generatePassword() {
  // Defines start of password avaliable characters
  let characters = "abcdefghijklmnopqrstuvwxyz";

  // Asks for a password length and converts it into a number
  let inputLength = parseInt( prompt("Specify length of password between 1 and 25.") );

  // // // Checks if length of password is a number and between 1 and 50
  // if (typeof inputLength !== 'number' && inputLength < 1 && inputLength >= 25) {
  //   alert(`It worked! You want a password ${inputLength} characters long.`);
  // } else {
  //   alert(`Sorry, you didn't provide a number between 1 and 50. Please try again.`);
  //   return;
  // }

  // Asks if numbers are wanted in password
  let inputNum = confirm("Do you want numbers in your password?");
  if (inputNum) {
    characters += "1234567890";
  }

  // Asks if capitol letters are wanted in password
  let inputCap = confirm("Do you want any capitol letters in your password?");
  if (inputCap) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  // Asks if capitol letters are wanted in password
  let inputSym = confirm("Do you want any special characters in your password?");
  if (inputSym) {
    characters += `!#$%&()+-/:;<=>?@[]_{}|~`;
  }

  // Creates the password based on length of the user input
  function password() {
    let result = '';
    for (let i = 0; i < inputLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length) );                         
    }
    return result;
  }
  return password();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
