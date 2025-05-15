  const getArrayContainingEvenNumber = (arrays) => {
  let increment = 0;

  for(let count = 0; count < arrays.length; count++){
      if(arrays[count] % 2 === 0){
          increment++;
      }
  }

  let result = new Array(increment);
  let increment2 = 0;

    for(let counter = 0; counter < arrays.length; counter++){
        if(arrays[counter] % 2 === 0){
            result[increment2] = arrays[counter];
            increment2++;
        }
    }
    return result;
}

const getArrayContainingOddNumber = (arrays) => {
    let increment = 0;

    for(let count = 0; count < arrays.length; count++){
        if(arrays[count] % 2 !== 0){
            increment++;
        }
    }

    let result = new Array(increment);
    let increment2 = 0;

    for(let counter = 0; counter < arrays.length; counter++){
        if(arrays[counter] % 2 !== 0){
            result[increment2] = arrays[counter];
            increment2++;
        }
    }
    return result;
}


const evenMin = (arrays) => {
    let increment = 0;

    for(let count = 0; count < arrays.length; count++){
        if(arrays[count] % 2 === 0){
            increment++;
        }
    }

    let result = new Array(increment);
    let increment2 = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for(let counter = 0; counter < arrays.length; counter++){
        if(arrays[counter] % 2 === 0){
            result[increment2] = arrays[counter];
            if(result[increment2] < min){
                min = result[increment2];
            }
            increment2++;
        }
    }
    return min;
}



const oddMin = (arrays) => {
    let increment = 0;

    for(let count = 0; count < arrays.length; count++){
        if(arrays[count] % 2 !== 0){
            increment++;
        }
    }

    let result = new Array(increment);
    let increment2 = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for(let counter = 0; counter < arrays.length; counter++){
        if(arrays[counter] % 2 !== 0){
            result[increment2] = arrays[counter];
            if(result[increment2] < min){
                min = result[increment2];
            }
            increment2++;
        }
    }
    return min;
}


const evenMax = (arrays) => {
    let increment = 0;

    for(let count = 0; count < arrays.length; count++){
        if(arrays[count] % 2 === 0){
            increment++;
        }
    }

    let result = new Array(increment);
    let increment2 = 0;
    let max = Number.MIN_SAFE_INTEGER;

    for(let counter = 0; counter < arrays.length; counter++){
        if(arrays[counter] % 2 === 0){
            result[increment2] = arrays[counter];
            if(result[increment2] > max){
                max = result[increment2];
            }
            increment2++;
        }
    }
    return max;
}



const oddMax = (arrays) => {
    let increment = 0;

    for(let count = 0; count < arrays.length; count++){
        if(arrays[count] % 2 !== 0){
            increment++;
        }
    }

    let result = new Array(increment);
    let increment2 = 0;
    let max = Number.MIN_SAFE_INTEGER;

    for(let counter = 0; counter < arrays.length; counter++){
        if(arrays[counter] % 2 !== 0){
            result[increment2] = arrays[counter];
            if(result[increment2] > max){
                max = result[increment2];
            }
            increment2++;
        }
    }
    return max;
}


const power = (base, exponent) => {
    let result = 1;
    for(let count = 1; count <= exponent; count++){
       result *= base;
    }
    return result;
}

const powerUsingRecursion = (base, exponent) => {
    if(exponent == 0){
        return 1;
    }else {
        return base * power(base, exponent - 1);
    }
}

const min = (num1, num2) => {
    if(num1 < num2){
        return num1;
    }
    return num2;
}

const max = (num1, num2) => {
    if(num1 > num2){
        return num1;
    }
    return num2;
}

//let doh = "doh";
//console.log(doh.toUpperCase());

let arr = [8,7,6,5,4,3,2,1,9];
arr.push(30);
arr.unshift(0);
arr.pop();
console.log(arr);
console.log("Even", getArrayContainingEvenNumber(arr));
console.log("Minimum from even:", evenMin(arr));
console.log("Miximumfrom even:", evenMax(arr));
console.log("Odd:", getArrayContainingOddNumber(arr));
console.log("Minimum from odd:", oddMin(arr));
console.log("Miximum from odd:", oddMax(arr));
console.log("Power:", power(2, 10));
console.log("Power:", powerUsingRecursion(2, 10));
console.log("Min:", min(2, 10));
console.log("Max:", max(2, 10));

