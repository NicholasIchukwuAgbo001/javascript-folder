
//forEach Method
/*
let numbers = [1,2,3,4,5,6,7,8,9]

const display = (element) =>{
    console.log(element)
}


const double = (element, index, array) =>{
    console.log(array[index] = element * 2);
}

const cube = (element, index, array) =>{
    console.log(array[index] = Math.pow(element, 3));
}


numbers.forEach(display)
//numbers.forEach(double)
//numbers.forEach(cube)
*/

/*
let numbers = [1,2,3,4,5,6,7,8,9]
let students = ["niko", "john", "moses", "joe"]

const display = (element) =>{
    return Math.pow(element, 2)
}

const upperCase = (element) => {
    return element.toUpperCase();
}

let result = numbers.map(display)
let nameUpper = students.map(upperCase)

console.log(result)
console.log(nameUpper)
*/


let numbers = [1,2,3,4,5,6,7,8,9]

const isEven = (element) => {
    return element % 2 === 0 
}

const isOdd = (element) => {
    return element % 2 !== 0 
}


let result = numbers.filter(isEven)
let result2 = numbers.filter(isOdd)

console.log(result)
console.log(result2)