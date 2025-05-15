class RevisionSnacks {

    sumArray = (arrays) =>{
        let sum = 0;       
        for(let num of arrays){
            sum += num;
        }
        return sum;
    }

    arrayOfObjects = (array) => {
        const result = array.map(item => {
            return {
                name: item.name,
                age: item.age,
            };
        });

        return result;
    }

    swapCoordinates = (array) => {
        const result = array.map(item => {
            return {
                x: item.y,
                y: item.x,
            };
        });

        return result;
    }


    extractValuesFromObjects = () => {
        const person = {
            name: 'John',
            age: 30,
            city: 'London',
            country: 'UK',
        }
        const {name, age, city} = person;
        return [name, age, city];
    }

    filterUnrepeatedSentence = (array) => {
        const result = array.filter((word, index) => {
            return array.indexOf(word) === index;
        });
        return result;

    }

    findNestedKey = (array, key) => {
        const result = array.map(item => {
            return item[key];
        });
        return result;
    }

    getKeyAndValue = (array) => {
        const result = array.map(item => {
            return {
                [item.key]: item.value,
            };
        });
        return result;
    }

    userScoreAbove80 = (array) => {
        const result = array.filter(items => {
            return items.score1 > 80 && items.score2 > 80;
        });
        return result;
    }

    createCounter = (counter) => {
        return function() {
            switch (counter) {
                case 'increment':
                    return ++counter;

                case 'decrement':
                    return --counter;

                case 'getCounter':
                    return counter;
                case 'reset':
                    return counter = 0;
                default:
                    throw new Error('Invalid operation');
            }
            
        };
    }

    createMathOperation = (operation) => {
        return function(a, b) {
            switch (operation) {
                case 'add':
                    return a + b;

                case 'subtract':
                    return a - b;

                case 'divide':
                    if (b === 0) {
                        throw new Error('Division by zero is not allowed');
                    }
                    return a / b;

                case 'multiply':
                    return a * b;

                default:
                    throw new Error('Invalid operation');
            }
        };
    }

    sumArray = (value) => {
        const result = value.reduce((total, numbers) => {
            return total + numbers
        }, 0)
        return result
    }

    times = (value) => {
        const result = value.map((items) => {
            return items * 2
        })
        return result
    }

    removeOdd = (value) => {
        const result = value.filter((items) => {
            return items % 2 === 0;
        })
        return result
    }


}


module.exports = RevisionSnacks;