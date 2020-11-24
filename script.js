//Step 3: Grabbed DOM elements

const passwordEl = document.getElementById('password')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')



//Step 2: Turned Functions into Objects
// This turns the Generator Functions into objects to be referenced later
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Step 4: Added event listener to generate button
//This is the event listener that activates uppon "click"
generate.addEventListener('click', () => {
  // the "+" parses lengthEl as number from list object
  const length = +lengthEl.value;

  //Step 5: These const .checked will check to see if elements are selected
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumbers = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;
  
  //Step 6: This calls the innertext of the password El 
  passwordEl.innerText = generatePassword(hasLower,hasUpper, hasNumbers, hasSymbols, length);
});

//Step 8: copy password to clipboard

//added click event listener to clipboardEl. text area is created in html. 
clipboardEl.addEventListener('click', () => {
  password.select();
  document.execCommand('copy');
  //alert('Password copied to clipboard');
});

// Step 7: Generate password function
function generatePassword(lower, upper, number, symbol, length) {

// 1. initialize password variable - a string that will continuously build the password 
// 2. filter out checked unchecked El from password
// 3. loop over length and call generator function for each type of function
// 4. add final pw to password variable and return it 

let generatedPassword = '';

const typesCount = lower + upper + number + symbol;

//console.log('typesCount: ', typesCount);

//creates array and curly braces sets keys as typesCount specific to their name 
const typesArr = [{lower}, {upper}, {number}, {symbol}]

//the .filter loops through each item and filters out whatever part of the array returns false. so filters through the values of items starting at 0, the first item. which ever item is not selected will have a 'false' value and therefore be filtered out from the array
.filter(
  item => Object.values(item)[0]
  );

//console.log('typesArr: ', typesArr)

//if none are checked, then return nothing
if(typesCount === 0) {
  return '';
}

//this cycles throught the array, adding each type of key/function (lower, upper, number, symbol) for the given length of the array
for(let i=0; i < length; i += typesCount) {
  typesArr.forEach(type => {

    const funcName = Object.keys(type)[0];
    //console.log('funcName: ', funcName);

    generatedPassword += randomFunc[funcName]();
  });
  }

// because the length is based on the typesCount, the length of the password is not the input length, so we have to slice the generatedPassword starting at the first key [0] by the length 

//console.log(generatedPassword.slice(0, length));

//so, we will create a constant and call it "finalPassword and set it to the sliced version of the function"
const finalPassword = generatedPassword.slice(0, length);

//now that we have our password to the right length, we can sumply return that 

return finalPassword;
}



//Step 1:Generator Functions 
// These functions randomly generate each character

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

// JUST FOR FUN 

//generateEl.addEventListener('click', () => {
