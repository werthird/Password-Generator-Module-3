/* -------------------------------------------------------------------------------------------
                              Password Character String
          - Uses a string to store user password preferences
          - Prompts adds password character options into the user preference string
          - Creates a random function to pick an item from the preference string
          - Uses method charAt to randomly select a character from the string
--------------------------------------------------------------------------------------------*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Genereator Function
function generatePassword() {
  // Defines start of password avaliable characters
  let characters = "";

  // Asks for a password length and converts it into a number
  let inputLength = parseInt( prompt("Specify length of password between 8 and 128.") );

  // // // Checks if length of password is a number and between 8 and 128
  if ( isNaN(inputLength) || inputLength < 8 || inputLength > 128 ) {
    alert(`Sorry, you didn't provide a number between 8 and 128. Please try again.`);
    return;
  } else {
    alert(`Sounds good! You want a password ${inputLength} characters long.`);
  }

  // Asks if letters are wanted in password
  let inputLow = confirm("Do you want letters in your password?");
  if (inputLow) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

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

  // Asks if special characters are wanted in password
  let inputSym = confirm("Do you want any special characters in your password?");
  if (inputSym) {
    characters += `!#$%&?@`;
  }

  if (characters === "") {
    alert(`You didn't select any parameters for your password. Please try again.`);
    return;
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
