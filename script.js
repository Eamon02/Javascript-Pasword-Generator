// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// on button click, alter <p> to generate random sequence of character using list. make sure document does not bubble up or reset on enter if form 

//seperate list for each option, character vs caps vs 

//add prompts and confirms to ask user qs - caps, no caps, special characters - based on answers add list 

//arrays - loops
//prompts and confirms 
//math.random 
//how long will you like it to be?


//DOM elements

const PasswordEl = document.getElementById('Password')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generate.btnEl = document.getElementById('generate.btn')
const clipboard.btnEl = document.getElementById('clipboard.btn')



//created object of Functions
cont randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generator Functions 

function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 97)
}

function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 65)
}

function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10)+ 48)
}

function getRandomSymbol () {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols [Math.floor(Math.random() * symbols.length)];
}
