const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes output log
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  return outputResult(currentResult, calcDescription); // from vendor file
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteLog("+", initalResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteLog("-", initalResult, enteredNumber);
}

function multpily() {
  const initalResult = currentResult;
  const enteredNumber = getUserNumberInput();
  currentResult = currentResult * enteredNumber;
  createAndWriteLog("x", initalResult, enteredNumber);
}

function divide() {
  const initalResult = currentResult;
  const enteredNumber = getUserNumberInput();
  currentResult = currentResult / enteredNumber;
  createAndWriteLog("/", initalResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multpily);
divideBtn.addEventListener("click", divide);
