const {calculate, addTwoNumbers, subtractTwoNumbers} = require("./functionAsAReturnArguement2.js");

test("add two numbers", ()=>{
let firstNumber = 5;
let secondNumber = 72; //Arrange
const result = addTwoNumbers(firstNumber, secondNumber); //Act
let answer = 77;
expect(result).toBe(answer) //Assert
})



test("subtract two numbers", ()=>{
let firstNumber = 5;
let secondNumber = 72; //Arrange
const result = subtractTwoNumbers(firstNumber, secondNumber); //Act
let answer = -67;
expect(result).toBe(answer) //Assert
})





