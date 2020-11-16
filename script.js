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

// Step 7: Generate password function
function generatePassword(lower, upper, number, symbol, length) {

// 1. initialize password variable - a string that will continuously build the password 
// 2. filter out checked unchecked El from password
// 3. loop over length and call generator function for each type of function
// 4. add final pw to password variable and return it 

let generaterPassword = '';

const typesCount = lower + upper + number + symbol;

console.log('typesCount: ', typesCount);
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
