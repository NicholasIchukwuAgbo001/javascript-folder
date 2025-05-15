const getEvenNumbers = require("./getEvenNumbers.js");

test("return even numbers", ()=>{
let arraysOfNumbers = [2,3,4,5,6,7,8,9];
let answer = [2,4,6,8];
let result = getEvenNumbers(arraysOfNumbers);
expect(result).toEqual(answer);
})
