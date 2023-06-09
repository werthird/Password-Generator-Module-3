/* -------------------------------------------------------------------------------------------
                              Password Character Array
          - Uses an array to store the user password preferences
          - Prompts push password character options into the user preference array
          - Creates a random function to pick an item from the preference array
--------------------------------------------------------------------------------------------*/


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Genereator Function
function generatePassword() {

  // Avaliable character array
  let characters = [];

  // Arrays with possible characters, based on user preferences
  const charLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const charCap = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const charNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const charSym = ["!", "#", "$", "%", "&", "?", "@"];


  // Asks for a password length and converts it into a number
  let inputLength = parseInt( prompt("Specify length of password between 8 and 128.") );

  // // // Checks if length of password is a number and between 8 and 128
  if ( isNaN(inputLength) || inputLength < 8 || inputLength > 128 ) {
    alert(`Sorry, you didn't provide a number between 8 and 128. Please try again.`);
    return;
  } else {
    alert(`Sounds Good! You want a password ${inputLength} characters long.`);
  }

  // Asks if LETTERS are wanted in password
  let inputLow = confirm("Do you want letters in your password?");
  if (inputLow) {
    characters.push(...charLow);
  }
  // Asks if CAPITOL LETTERS are wanted in password
  let inputCap = confirm("Do you want any capitol letters in your password?");
  if (inputCap) {
    characters.push(...charCap);
  }
  // Asks if NUMBERS are wanted in password
  let inputNum = confirm("Do you want numbers in your password?");
  if (inputNum) {
    characters.push(...charNum);
  }
  // Asks if SPECIAL CHARACTERS are wanted in password
  let inputSym = confirm("Do you want any special characters in your password?");
  if (inputSym) {
    characters.push(...charSym);
  }

  // Checks that user designated at least on parameter
  if (characters.length === 0) {
    alert(`You didn't select any parameters for your password. Please try again.`);
    return;
  }

  // Creates the password based on length of the user input
  function password() {
    let result = '';
    for (let i = 0; i < inputLength; i++) {
      result += characters[(Math.floor(Math.random() * characters.length) )];                         
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
