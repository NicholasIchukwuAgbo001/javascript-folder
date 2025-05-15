const ArrayTask = require('./arrayTaskMethod');

const arrayTask = new ArrayTask();

test('Test Scorees', () => {
    const scores = [50, 60, 70, 80, 90];
    const expectedResult = [70, 80, 90];
    const result = arrayTask.testScorees(scores);
    expect(result).toEqual(expectedResult);
}
);

test('Increase Tom Result By Five', () => {
    const scores = [85, 92, 78, 88, 95];
    const expectedResult = [90, 97, 83, 93, 100];  
    const result = arrayTask.increaseTomResultByFive(scores);
    expect(result).toEqual(expectedResult);
});

test('Square Of Each Number', () => {
    const numbers = [1, 2, 3, 4, 5];
    const expectedResult = [1, 4, 9, 16, 25];
    const result = arrayTask.squareOfEachNumber(numbers);
    expect(result).toEqual(expectedResult);
}
);

test('Jake After Noon Class Time', () => {
    const classTimes = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
    const expectedResult = ["1:00 PM", "3:00 PM", "5:00 PM"];
    const result = arrayTask.afternoonClasses(classTimes);
    expect(result).toEqual(expectedResult);
}
);

test('Sum The Amount He Spent In All Categories', () => {
    const amounts = {"groceries": 150, "dining out": 100, "transportation" : 50, "entertainment": 80};
    const expectedResult = 380;
    const result = arrayTask.sumTheAmountHeSpentInAllCategories(amounts);
    expect(result).toEqual(expectedResult);
});

test('Letter Grabe Base On Student Score', () => {
    const scores = [95, 78, 85, 60, 45, 92];
    const expectedResult = ["A", "C", "B", "D", "F", "A"];
    const result = arrayTask.letterGrabeBaseOnStudentScore(scores);
    expect(result).toEqual(expectedResult);
});

test('healthy Items', () => {
    const shoppingList = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
        { name: 'Soda', category: 'Beverages', isHealthy: false }
        ];
    const expectedResult = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true }
    ];
    const result = arrayTask.shoppingList(shoppingList);
    expect(result).toEqual(expectedResult);
});

test(' filter oder that rotal cost if more than 100 and give the summary include id and total cost', () => {
    const orders = [
        { id: 1, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }] },
        { id: 2, items: [{ price: 30, quantity: 1 }] },
        ];
    const expectedResult = [
        { id: 2, totalCost: 30 }
    ];
    const result = arrayTask.filterItemThatCostMoreThan100(orders);
    expect(result).toEqual(expectedResult);
    });