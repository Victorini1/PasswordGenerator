// Assignment Code
var generateBtn = document.querySelector("#generate");

// Provided by instructor
var allowUppercase;
var allowLowerCase;
var allowNumbers;
var allowSpecials;
var passwordCharacterCount;


// Set up valid characters for generator to populate
var uppercaseChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowercaseChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "|", "\\", "}", "{", "]", "[", '"', "'", ":", ";", "/", "?", ".", ">", ",", "<", "`", "~"];
var characters = []



// Ask how many characters the user would like to add
function userInput(){
  function askAboutLength(passwordCharacterCount){
    passwordCharacterCount = parseInt(prompt("How many characters would you like the password to be? Please choose between 8 - 124 characters long."));
    return passwordCharacterCount
  }

  function askAboutUppercase(){
  allowUppercase = confirm("Would like upper case characters?");
  // If yes then push uppercase to the characters array
  if (allowUppercase === true) {
    characters.push(uppercaseChars.join('')); //join arrays cited from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    }
  }

  function askAboutLowercase(){
    allowLowerCase = confirm("Would you like lower case characters?");
  // If yes then push lowercase to the characters array
    if (allowLowerCase === true) {
    characters.push(lowercaseChars.join('')); 
    }
  }
  function askAboutNumber() {
    allowNumbers = confirm("Would you like numbers?");
  // If yes then push numbers to the characters array
    if (allowNumbers === true) {
    characters.push(number.join('')); 
    }
  }

  function askAboutSpecials(){
    allowSpecials = confirm("Would you like special characters?");
    // If yes then push special chracters to the characters array
    if (allowSpecials === true) {
      characters.push(number.join('')); 
    }
  }
//Ask the questions
 askAboutLength()
 askAboutUppercase()
 askAboutLowercase()
 askAboutNumber()
 askAboutSpecials()
}

// If upper case characters allowed push them to the array
// Repeat for other criteria; for the number of characters, use a prompt statement. Google it. NOTE: prompt statements think any value you provide is a string. You will need to convert it to a number.
// Once all the criteria are determined, this function will generate the password. You can create other functions also if you need them.
function generatePassword(){
  userInput();
  var finalResult = ""
//Puts all the characters into an array and loop that over and over again until it gets the amount of characters requested
  for (var i=1; i<=passwordCharacterCount; i++ ) {
  var randomized = Math.floor(Math.random() * characters.length -1)
  finalResult += characters[randomized]
  }
  return finalResult;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);