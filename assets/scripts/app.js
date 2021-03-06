const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//Generates and write calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //from vendor file
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
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== 'DIVIDE' ||
    !enteredNumber
  ){
    return;
  }

  
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

// function add() {
//   calculateResult("ADD");
// }

// function subtract() {
//   calculateResult("SUBTRACT");
// }

// function multiply() {
//   calculateResult("MULTIPLY");
// }

// function divide() {
//   calculateResult("DIVIDE");
// }

const calculate = (operation) => {
  if(operation === 'ADD') {
    calculateResult('ADD');
  } else if (operation === 'SUBTRACT') {
    calculateResult('SUBTRACT');
  } else if (operation === 'MULTIPLY') {
    calculateResult("MULTIPLY");
  } else {
    calculateResult("DIVIDE");
  }
}
addBtn.addEventListener("click", calculate.bind(this,'ADD')); // neither calculate nor bind will run immediately insted bind ready itself with confirguation
subtractBtn.addEventListener("click", calculate.bind(this,'SUBTRACT'));
multiplyBtn.addEventListener("click", calculate.bind(this,'MULTIPLY'));
divideBtn.addEventListener("click",  calculate.bind(this,'DIVIDE'));
