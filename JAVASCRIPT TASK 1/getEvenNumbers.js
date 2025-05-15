function getEvenNumbers(array){
let arrayOfEvenNumber = []
for(let value of array){
if(value % 2 == 0){
arrayOfEvenNumber.push(value)
 }
}
return arrayOfEvenNumber;
}
module.exports = getEvenNumbers;

let arr = [1,2,3,4,5,6,7,8,9];
console.log(getEvenNumbers(arr))

module.exports = getEvenNumbers; 