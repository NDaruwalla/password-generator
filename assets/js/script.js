// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 



// Pseudocode 



// prompt statements
//(prompt) Enter a number to represent the length of your password (must be at least 8 characters and no more than 128 characters)
let promptLength = prompt ("Enter a number for the length for your password. Enter at least 8, but no more than 128.");

//Character arrays needed for password generation:
//uppercase letters
//lowercase letters
//numbers
//special characters
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let special = ["&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~", "!", "#", "$", "%"];
//Question: should these be arrays or strings? Possibly need to try both ways.

//Click "generate password" button to begin password generation process
//Present prompts to determine criteria:

// confirm Statements - TRUE or FALSE: 
let confirmUpper = confirm ("Do you want to include uppercase characters?");
let confirmLower = confirm ("Do you want to include lowercase characters?");
let confirmNum = confirm ("Do you want to include numbers?");
let confirmSpecial = confirm ("Do you want to include special characters?");
//Validate that at least one array has been selected.

// alert statements
//(Alert) if number <8 or >128. "You must select a length of at least 8 characters and no more than 128 characters"
/*
If none was selected, 
(alert)"You must select at least one character set." Then (confirm) character sets again:
Do you want to include uppercase? 
Do you want to include lowercase? 
Do you want to include numbers? 
Do you want to include special characters? 

Repeat until at least one character set is selected. */
let alertCharSet = ("You must select at least one character set.");
let alertPickLength = ("You must select a number of at least 8, but no more than 128 for the length of your password.");



/* Loop through each array selecting one random character from each array until the password length is reached. This is seeming overly complex...I will instead revise code to add selected arrays together as they are selected and create a randome password from 
concatenated set of characters */

/*
Generate a random password from array that contains only selected character sets and in the length that was selected.

Display the secure password in the text area on the page 
 */