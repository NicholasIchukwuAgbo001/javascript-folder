const isQual = require ('./rowAndColToBeEqual')

test('rows and cols are equal', () => {
    const array = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
]
let expectedResult = true
expect(isQual(array)).toBe(expectedResult);
})