
const sorting = (numbers) => {
    for(let count = 0; count < numbers.length; count++){
        for(let counter = 0; counter < numbers.length; counter++){

            if(numbers[counter] > numbers[counter + 1]){
                let temp = numbers[counter];
                numbers[counter] = numbers[counter + 1];
                numbers[counter + 1] = temp;
            }
        }
    }
    return numbers;
}

let numbers = [5,5,3,3,7,7,2,2,9,-1]
console.log(sorting(numbers))
