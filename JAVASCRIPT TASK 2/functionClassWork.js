function calculateArea(width, height){
let area = width * height
return area;
}

function convertToFahrenheit(temperatuer){
let result = (temperatuer * 9 / 5) + 32;
return result;
}

function isEven(evenNumber){
if(evenNumber % 2 == 0){
return true;
}
return false;
}


function isLeapYear(year){
if(year % 4 == 0){
return true;
}else if(year % 100 == 0){
return false;
}else if(year % 400 == 0){
return true;
}
return false;
}


function countVowels(vowels) {

let words = "aeiouAEIOU";
let result = 0;

for (let count = 0; count < vowels.length; count++) {
for (let count2 = 0; count2 < words.length; count2++) {
if (words[count2] == vowels[count]) {
result++;
}
}
}
  return result;
}




module.exports = {calculateArea, convertToFahrenheit, isEven, countVowels, isLeapYear};
//let vow = 'abcdef';
//console.log(calculateArea(2,3))
//console.log(convertToFahrenheit(26))
//console.log(isEven(2))
//console.log(isLeapYear(2025))
//console.log(countVowels(vow))
