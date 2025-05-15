const divisor = (num1, num2) => {
    if (num2 === 0){
       return num1;
    }
    return divisor(num2, num1 % num2);
};
 
const highestDivisor = (array) => {

    let result = array[0];

    for (let count = 1; count < array.length; count++) {
      result = divisor(result, array[count]);
    }

    return result;
};
  
  let array = [18, 0, 12];
  let array2 = [15, 10, 20];

  console.log(highestDivisor(array));
  console.log(highestDivisor(array2));

  module.exports = highestDivisor
  
  