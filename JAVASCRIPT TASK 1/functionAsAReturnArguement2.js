function calculate(firstNumber, secondNumber, callBackFunction){
return callBackFunction(firstNumber, secondNumber)
};

function addTwoNumbers(numberOne, numberTwo){
let result = numberOne + numberTwo;
return result;
};

function subtractTwoNumbers(numberOne, numberTwo){
let result = numberOne - numberTwo;
return result;
};

module.exports = {calculate, addTwoNumbers, subtractTwoNumbers} 

//console.log(calculate(firstNumber, secondNumber, addTwoNumbers));
//console.log(calculate(firstNumber, secondNumber, subtratTwoNumbers));