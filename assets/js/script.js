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

//Character arrays needed for password generation:
//uppercase letters
//lowercase letters
//numbers
//special characters
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let special = ["&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~", "!", "#", "$", "%"]


//Click "generate password" button to begin password generation process
//Present prompts to determine criteria:

//(confirm)(TRUE or FALSE): 
let confirmUpper = (confirm) ("Do you wnat to include uppercase characters?");
let confirmLower = (confirm) ("Do you want to include lowercase characters?");
let confirmNum = (confirm) ("Do you wnat to include numbers?");
let confirmSpecial = (confirm) ("Do you want to include special characters?");


/*Validate that at least one array has been selected.

If none was selected, 
(alert)"You must select at least one character set." Then (confirm) character sets again:
Do you want to include uppercase? yes, no
Do you want to include lowercase? yes, no
Do you want to include numbers? yes, no
Do you want to include special characters? yes, no

Loop until at least one character set is selected.

(prompt)
Enter a number to represent the length of your password (must be at least 8 characters and no more than 128 characters)

(Alert) if number <8 or >128. "You must select a length of at least 8 characters and no more than 128 characters"

(prompt)
Enter a number to represent the length of your password (must be at least 8 characters and no more than 128 characters)

Loop until number selected is selected is at least 8 characters and no more than 128 characters.

Loop through each array selecting one random character from each array until the password length is reached.

Next, take the password created and scramble/shuffle/randomize the order of the characters in the password. 
(Scrambling the characters is required because while characters are randomly selected from each array, due to the order of the array, the character set type (i.e., uppercase, lowercase, numbers,  special characters) will be predictable if they are not scrambled).

Generate a random password from array that contains only selected character sets and in the length that was selected.

Display the secure password in the text area on the page 
 */