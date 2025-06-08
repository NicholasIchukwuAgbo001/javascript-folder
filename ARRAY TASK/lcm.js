
const lcm = (array) => {
  let result = array[0];
  for (let count = 1; count < array.length; count++) {
    result = (result * array[count]);
  }

let mainResult = [];
for (let count = 2; result >= 2; count++) {
  while (result % count === 0) {
    mainResult.push(count);
    result /= count;
  } 
}
return mainResult;
}

console.log(lcm([6,9,7]));