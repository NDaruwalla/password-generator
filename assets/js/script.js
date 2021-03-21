// Assignment Code

let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 




// these are the 'buckets' to hold the arrays.
let availArray = [];
let desiredArray = [];

// Pseudocode 
//Present prompts to determine criteria:
// confirm Statements - TRUE or FALSE: 
let confirmUpper = confirm ("Do you want to include uppercase characters?");
let confirmLower = confirm ("Do you want to include lowercase characters?");
let confirmNum = confirm ("Do you want to include numbers?");
let confirmSpecial = confirm ("Do you want to include special characters?");
//Validate that at least one array has been selected.
let alertCharSet = ("You must select at least one character set.");

// prompt statements
//(prompt) Enter a number to represent the length of your password (must be at least 8 characters and no more than 128 characters)
let promptLength = prompt ("Enter a number for the length for your password. Enter at least 8, but no more than 128.");
let alertPickLength = ("You must select a number of at least 8, but no more than 128 for the length of your password.");



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

//If  statements to determine which arrays need to be used in password generation. If true, add (concatenate) array. Add all of the arrays selected together. Alert if no character set is selected.
if (confirmUpper) {
  availArray = availArray.concat(uppercase)
}


if (confirmLower) {
  availArray = availArray.concat(lowercase)
}


if (confirmNum) {
  availArray = availArray.concat(numbers)
}


if (confirmSpecial) {
  availArray = availArray.concat(special)
  }

// I'll need the following to generate the password from the array selection(s) gathered above:
// use array.push method to add characters to the array  https://www.w3schools.com/jsref/jsref_push.asp
// use Math.random to return a random number between 0 (inclusive),  and 1 (exclusive) note: it returns a number always lower than 1  https://www.w3schools.com/js/js_random.asp
// times the random number by the pasword length selected. 
// use Math.floor to round down. (The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result. https://www.w3schools.com/jsref/jsref_floor.asp




// use array.join method to remove the commas from result  https://www.w3schools.com/jsref/jsref_join.asp

//Click "generate password" button to begin password generation process




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





/* Loop through each array selecting one random character from each array until the password length is reached. This is seeming overly complex...I will instead revise code to add selected arrays together as they are selected and create a randome password from 
concatenated set of characters */

/*
Generate a random password from array that contains only selected character sets and in the length that was selected.

Display the secure password in the text area on the page 
 */