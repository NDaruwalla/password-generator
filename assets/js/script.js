// Assignment Code
// Set the variable generateBtn to the html object of generate i.e. the Generate Password button
let generateBtn = document.querySelector('#generate')

// Add event listener to the generate button on click, and kick off the writePassword function
generateBtn.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword () {
  // Set the password variable to the output of the generatePassword() function
  let password = generatePassword()
  // Set the passwordText variable to the html object located in the text area with id = password
  let passwordText = document.querySelector('#password')
  // Displays the password variable in the passwordText variable which is also the value in the html text area 
  // Display the secure password in the text area on the page
  passwordText.value = password
}

// Master function that takes the input from the user and builds the password text
function generatePassword () {
  
  // Prompting the user for text input of length of password
  let pwdLength = prompt('Enter a number for the length for your password. Enter at least 8, but no more than 128.') //the entry will be a string that needs to be converted to a number before it can be validated.
  // Converting the data type from string to integer
  let pwdLengthInt = parseInt(pwdLength); // The parseInt() function parses a string and returns an integer (https://www.w3schools.com/jsref/jsref_parseint.asp)
  
  // Setting general variables for various messages to be used later.
  let alertPickLength = ('You must select a number of at least 8, but no more than 128 for the length of your password.')
  let alertPickNumber = ('Oops..That was not a number! Please try again.') 

  // This is the parent while loop which checks for a valid integer between 8 and 128 input by the user
  // While all of the following conditions are true (entry is not a number or blank, entry is number less than 8, entry is greater than 128), keep prompting for a valid number
  // isNaN means "is not a number" https://www.w3schools.com/jsref/jsref_isnan.asp
  // Note: I recieved assistance to create this nested while loop
  // Dedicated loop message for NaN versus number out of range
  while((isNaN(pwdLengthInt)) || pwdLengthInt < 8 || pwdLengthInt > 128){
    // Check for number - in case the user enters alphabet or symbols or blank
    while (isNaN(pwdLengthInt)) {
      alert(alertPickNumber)
      pwdLength = prompt('Enter a number for the length for your password. Enter at least 8, but no more than 128.') // this code resets variable after alert
      pwdLengthInt = parseInt(pwdLength) // this code converts the newly entered value as an integer
    }
    // Check to make sure integer entered is at least 8 and no more than 128
    while (pwdLengthInt < 8 || pwdLengthInt > 128) {
      alert(alertPickLength)
      pwdLength = prompt('Enter a number for the length for your password. Enter at least 8, but no more than 128.') // this code resets variable after alert
      pwdLengthInt = parseInt(pwdLength) // this code converts the newly entered value as an integer
    }
  } // only exits this loop once entry is a valid number at least 8 and no more than 128.

  // these are the 'buckets' to hold the arrays.
  // selectedArray represents the user selected arrays (one or more of the following:uppercase, lowercase, numbers, special ) to be included in the password.
  let selectedArray = []
   // finalArray represents the user selected array after randomization and  password length have been applied. 
  let finalArray = []

  // Character arrays needed for password generation:
  // uppercase letters
  // lowercase letters
  // numbers
  // special characters
  let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let special = ['&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '"', ']', '^', '_', '`', '{', '|', '}', '~', '!', '#', '$', '%']
  //let special = ['&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', ' < ', '=', ' > ', ' ? ', '@', '[', ']', ' ^ ', '_', '`', '{', '|', '}', '~', '!', '#', '$', '%']


  // Present prompts to determine criteria:
  // confirm Statements - TRUE or FALSE: 
  let confirmUpper = confirm('Do you want to include UPPERCASE characters?');
  let confirmLower = confirm('Do you want to include lowercase characters?');
  let confirmNum = confirm('Do you want to include numbers (0-9)?');
  let confirmSpecial = confirm('Do you want to include special characters?');
  // Validate that at least one array has been selected.
  let alertCharSet = ('You must select at least one character set.');

  // prompt statements
  // (prompt) Enter a number to represent the length of your password (must be at least 8 characters and no more than 128 characters)

  // If  statements to determine which arrays need to be used in password generation. If true, add (concatenate) array. Add all of the arrays selected together. Alert if no character set is selected.
  if (confirmUpper) {
    selectedArray = selectedArray.concat(uppercase);
  }

  if (confirmLower) {
    selectedArray = selectedArray.concat(lowercase);
  }

  if (confirmNum) {
    selectedArray = selectedArray.concat(numbers);
  }

  if (confirmSpecial) {
    selectedArray = selectedArray.concat(special);
  }
  // Catch for user not selecting any options. Will display custom message (alert) and start the generatePassword() function again for getting all inputs from the beginning.
  if (!confirmUpper && !confirmLower && !confirmNum && !confirmSpecial) {
    alert(alertCharSet);
    generatePassword();
  }

  for (let i = 0; i < pwdLengthInt; i++) {
    // The following takes the combined user selected array(s) and applies the randomization of the characters and the password length selected by user.
    // I'll need the following to generate the password from the array selection(s) gathered above:
    // use array.push method to add characters to the array  https://www.w3schools.com/jsref/jsref_push.asp
    // use Math.random to return a random number between 0 (inclusive),  and 1 (exclusive) note: it returns a number always lower than 1  https://www.w3schools.com/js/js_random.asp
    // times the random number by the pasword length selected. 
    // use Math.floor to round down. (The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result. https://www.w3schools.com/jsref/jsref_floor.asp
     //(finalArray.push(selectedArray)[Math.floor(Math.random() * selectedArray.length)]);
     finalArray.push(selectedArray[Math.floor(Math.random() * selectedArray.length)]);
    }
//console.log(finalArray);
//console.log(pwdLengthInt);
//console.log(finalArray.join(""));

// use array.join method to remove the commas from result  https://www.w3schools.com/jsref/jsref_join.asp
// Removes the quotes from the array and makes it into a string
return (finalArray.join(""));
//return finalArray.join("");

  }

 









 
