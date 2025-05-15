const Rectangle = require('./rectangle.js');

test('Rectangle Area', () => {
    const rectangle = new Rectangle('Rectangle', 5, 5);
    expect(rectangle.getArea()).toBe(25);
});

test('Shape Name', () => {
    const rectangle = new Rectangle('Rectangle', 5, 5);
    expect(rectangle.getName()).toBe('Rectangle');
});
