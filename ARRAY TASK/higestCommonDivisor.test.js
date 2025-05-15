const highestDivisor = require('./highestCommonDivisor.js');

test('Highest Common Divisor', () => {
    const array = [18, 2, 12, 6];
    const expectedResult = 2;
    const result = highestDivisor(array);
    expect(result).toEqual(expectedResult);
});

test('Highest Common Divisor', () => {
    const array = [15, 10, 20];
    const expectedResult = 5;
    const result = highestDivisor(array);
    expect(result).toEqual(expectedResult);
});