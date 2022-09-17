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

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  let mathOperator;
  if (calculationType === "add") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "subtract") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "multiply") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "divide") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  createAndWriteLog(mathOperator, initalResult, enteredNumber);
  writeToLog(calculationType, initalResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("add");
}

function subtract() {
  calculateResult("subtract");
}

function multpily() {
  calculateResult("multiply");
}

function divide() {
  calculateResult("divide");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multpily);
divideBtn.addEventListener("click", divide);
