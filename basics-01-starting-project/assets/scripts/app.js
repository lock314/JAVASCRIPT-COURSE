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

function add() {
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteLog("+", initalResult, enteredNumber);
  const logEntry = {
    operation: "ADD",
    prevResult: initalResult,
    operand: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteLog("-", initalResult, enteredNumber);
  const logEntry = {
    operation: "SUBTRACT",
    prevResult: initalResult,
    operand: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
}

function multpily() {
  const initalResult = currentResult;
  const enteredNumber = getUserNumberInput();
  const logEntry = {
    operation: "MULTIPLY",
    prevResult: initalResult,
    operand: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
  currentResult *= enteredNumber;
  createAndWriteLog("x", initalResult, enteredNumber);
}

function divide() {
  const initalResult = currentResult;
  const enteredNumber = getUserNumberInput();
  const logEntry = {
    operation: "DIVIDE",
    prevResult: initalResult,
    operand: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
  currentResult /= enteredNumber;
  createAndWriteLog("/", initalResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multpily);
divideBtn.addEventListener("click", divide);
