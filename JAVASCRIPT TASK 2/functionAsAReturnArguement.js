let numOne = 10;
let numTwo = 2;

function createCalculator(numberOne, NumberTwo){
 return{

  add: function(){return numOne + numTwo},

  subtract: function(){return numOne - numTwo},

  division: function(){return numOne / numTwo},

  multiply: function(){return numOne * numTwo}

 }

}

let result = createCalculator(numOne, numTwo);

console.log(`Addition ${result.add()}, Subtraction ${result.subtract()}, Division ${result.division()}, Multiplication  ${result.multiply()}`)
//console.log(Object.keys(result))
//console.log(Object.values(result))