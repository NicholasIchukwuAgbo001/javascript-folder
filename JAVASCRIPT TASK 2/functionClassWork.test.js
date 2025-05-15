const {calculateArea, convertToFahrenheit, isEven, countVowels, isLeapYear} = require("./functionClassWork.js");

test("Get area", ()=>{
let width = 2;
let height = 3;
let answer = 6;
let result = calculateArea(width,height);
expect(result).toBe(answer);
})

test("Get temperature", ()=>{
let temp = 26;
let answer = 78.8;
let result = convertToFahrenheit(temp);
expect(result).toBe(answer);
})

test("Check even", ()=>{
let number = 2;
let answer = true;
let result = isEven(number);
expect(result).toBe(answer);
})


test("Count vowels", ()=>{
let words = 'abcdef';
let answer = 2;
let result = countVowels(words);
expect(result).toBe(answer);
})


test("Check leap year", ()=>{
let year = 2025;
let answer = false;
let result = isLeapYear(year);
expect(result).toEqual(answer);
})







