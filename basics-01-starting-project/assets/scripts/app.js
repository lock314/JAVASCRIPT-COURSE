const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes output log
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  return outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    operand: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteLog("+", initalResult, enteredNumber);
  writeToLog("Add", initalResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteLog("-", initalResult, enteredNumber);
  writeToLog("Subtract", initalResult, enteredNumber, currentResult);
}

function multpily() {
  const initalResult = currentResult;
  const enteredNumber = getUserNumberInput();
  writeToLog("Multiply", initalResult, enteredNumber, currentResult);
}

function divide() {
  const initalResult = currentResult;
  const enteredNumber = getUserNumberInput();
  writeToLog("Divide", initalResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multpily);
divideBtn.addEventListener("click", divide);
