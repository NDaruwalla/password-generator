# 03 JavaScript: Password Generator

## Description 

I created an application that enables employees to generate random passwords based on criteria that they’ve selected. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. It has a responsive user interface that adapts to multiple screen sizes.

The password can include: uppercase letters, lower case letters, numbers, and/or special characters [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Pseudo-code / Algorithms

```
Character arrays needed for password generation:
uppercase letters
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

lowercase letters
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

numbers
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

special characters
let special = ["U+0021",	"U+0022",	"U+0023",	"U+0024",	"U+0025",	"U+0026",	"U+0027",	"U+0028",	"U+0029",	"U+002A",	"U+002B",	"U+002C",	"U+002D",	"U+002E",	"U+002F",	"U+003A",	"U+003B",	"U+003C",	"U+003D",	"U+003E",	"U+003F",	"U+0040",	"U+005B",	"U+005C",	"U+005D",	"U+005E",	"U+005F",	"U+0060",	"U+007B",	"U+007C",	"U+007D",	"U+007E"]


Click button to generate a password
Present prompts to determine criteria:

(confirm)(TRUE or FALSE):
Do you want to include uppercase characters? yes, no
Do you want to include lowercase characters? yes, no
Do you want to include numbers? yes, no
Do you want to include special characters? yes, no

Validate that at least one array has been selected.

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

Next, take the password created and scramble/shuffle/randomize the order of the characters in the password. (Scrambling the characters is required because while characters are randomly selected from each array, due to the order of the array, the character set type (i.e., uppercase, lowercase, numbers,  special characters) will be predictable if they are not scrambled).

Generate a random password from array that contains only selected character sets and in the length that was selected.

Display the secure password in an alert (or) written to the page 
```

## Mock-up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)


## Screen Capture

The following animation shows my web application's appearance and functionality:

![portfolio demo](./assets/images/password-generator.jpg)


## Key Features of this application
* A new secure password is generated when the "generate password" button is clicked
* A series of promps are presented to determine the password criteria from 4 character (uppercase, lowercase, numbers, special characters)
* Application ensures that at least one character set is selected
* Employee is able to select the length of the password (at least 8 characters and no more than 128 characters)
* Application ensures that at least 8 characters and no more than 128 characters are selected
* The password generated contains all selected criteria.
* The password is displayed in an alert (or written on the page)


## Deployed application

The URL of the deployed application.
https://ndaruwalla.github.io/password-generator/

## GitHub repository

The URL of the GitHub repository that contains my code.
https://github.com/NDaruwalla/password-generator/
