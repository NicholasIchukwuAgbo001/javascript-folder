/*
let score = [1,2,3,4,5,6,7,8,9,10];
let evenNumber = 0;
let oddNumber = 0;
let sum = 0;

for(let count = 0; count < score.length; count++){

const prompt = require('prompt-sync')();
const score = Number(prompt('What is your name?: '));

if(score[count] % 2 == 0){
evenNumber += score[count];
}

if(score[count] % 2 != 0){
oddNumber += score[count];
}

sum += score[count];
}

console.log("Even Number:", evenNumber);
console.log("Odd Number:", oddNumber);
console.log("sum:", sum);
*/




/*
const square1 = function(num){
return num * num;
};

function square2 (num){
return num * num;
};

const square3 = (num) => num * num;

console.log("using function declaration",square1(12))

console.log("using function expression",square2(12))

console.log("Using arrow function",square3(12))




function minus(a, b){
if(b === undefined){
return - a;
}else{
return a - b;
}
}

console.log(minus(5))
console.log(minus(12, 7))

//process.stdout.write(count + " ") => help to print on a striaght line




function power(base, exponent){
let result = 1;
for(let count = 0; count < exponent; count++){
result *= base;
}
return result;
}

console.log("power",power(2, 6))

let listOfNumbers = [2,3,5,7,11];

console.log(listOfNumbers[0])

console.log(listOfNumbers[2 - 1])




let arrays = [2,3,4,5,6,7];
let sum = 0;

for(let element of arrays){
console.log(element);
sum += element;
}

console.log(sum);
*/



/*
let obj = {
	name: "chi",
	age: 12
	}

for(let key in obj){
console.log(obj[key])
};




let arrays = [2,3,4,5,6,7];
let sum = 0;

for(let index in arrays){
console.log(arrays[index]);
};
*/


/*
let count = 1;

while(count <= 10){
console.log(count);
count++;
}
*/


/*
let count = 1;


do{
console.log(count);
count++;
} while(count <= 10);
*/