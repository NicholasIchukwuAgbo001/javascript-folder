const RevisionSnacks = require('./revisionSnacks.js');

const revisionSnacks = new RevisionSnacks();

test('sumArray', () => {
    const arrays = [1, 1, 3];
    const expectedResult = 5;
    expect(revisionSnacks.sumArray(arrays)).toBe(expectedResult);
});

test('array of objects', () => {
    const array = [
        {   name: 'John',
            age: 25,
        },
        {   name: 'Jane',
            age: 30,
        },
    ];
    const expectedResult = [
        { name: 'John', age: 25},
        { name: 'Jane', age: 30},
    ];
    expect(revisionSnacks.arrayOfObjects(array)).toEqual(expectedResult);
});

test('swap Coordinates', () => {
    const array = [
        { x: 1, y: 2 },
        { x: 3, y: 4 },
    ];
    const expectedResult = [
        { x: 2, y: 1 },
        { x: 4, y: 3 },
    ];
    expect(revisionSnacks.swapCoordinates(array)).toEqual(expectedResult);
});

test('extract values from objects', () => {
    const result = revisionSnacks.extractValuesFromObjects();
    expect(result).toEqual(['John', 30, 'London']);
});

test('filter unrepeated sentence', () => {
    const array = [
        'Hello world',
        'Nikolas',
        'Hello world',
        'Hello world',
        'Hello world',
    ];
    const expectedResult = [
        'Hello world',
        'Nikolas',
    ];
    expect(revisionSnacks.filterUnrepeatedSentence(array)).toEqual(expectedResult);
});

test('find nested key', () => {
    const array = [
        { name: 'John' },
        { name: 'Jane'},
    ];
    const key = 'name';
    const expectedResult = ['John', 'Jane'];
    expect(revisionSnacks.findNestedKey(array, key)).toEqual(expectedResult);
});

test('get key and value', () => {
    const array = [
        { key: 'age', value: 30 },
    ];
    const expectedResult = [
        { age: 30 },
    ];
    expect(revisionSnacks.getKeyAndValue(array)).toEqual(expectedResult);
});

test('user that score above 80', () => {
    const array = [
        { name: 'Jane', score1: 70, score2: 75 },
        { name: 'Niko', score1: 90, score2: 95 },
    ];
    const expectedResult = [
        { name: 'Niko', score1: 90, score2: 95 },
    ];
    expect(revisionSnacks.userScoreAbove80(array)).toEqual(expectedResult);
});


// test('Create counter', () => {
//     const increment = revisionSnacks.createCounter('increment')
//     const result = increment(1)
//     expect(result).toEqual(1)
// });


test('create math operation for add', () => {
    const add = revisionSnacks.createMathOperation('add');
    const result = add(1, 1);
    expect(result).toEqual(2);
});

test('create math operation for subtract', () => {
    const subtract = revisionSnacks.createMathOperation('subtract');
    const result = subtract(4, 2);
    expect(result).toEqual(2);
});

test('create math operation for divide', () => {
    const divide = revisionSnacks.createMathOperation('divide');
    const result = divide(6, 2);
    expect(result).toEqual(3);
});

test('create math operation for divide by zero', () => {
    const divide = revisionSnacks.createMathOperation('divide');
    expect(() => {
        divide(6, 0);
    }).toThrow('Division by zero is not allowed');
});

test('create math operation for unknown operation', () => {
    const power = revisionSnacks.createMathOperation('power');
    expect(() => {
        power(2, 3);
    }).toThrow('Invalid operation');
});

test('create math operation for multiply', () => {
    const multiply = revisionSnacks.createMathOperation('multiply');
    const result = multiply(2, 3);
    expect(result).toEqual(6);
});

test('sum of array', () => {
    const value = [1,2,3]
    const result = 6
    expect(revisionSnacks.sumArray(value)).toEqual(result)
})

test('times', () => {
    const value = [1,2,3]
    const result = [2, 4, 6]
    expect(revisionSnacks.times(value)).toEqual(result)
})

test('remove odd numbers', () => {
    const value = [1,2,3]
    const result = [2]
    expect(revisionSnacks.removeOdd(value)).toEqual(result)
})