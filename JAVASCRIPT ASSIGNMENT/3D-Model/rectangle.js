const Shape = require('./shape.js');

class Rectangle extends Shape {

    #width;
    #height;

    constructor(name, width, height) {
        super(name);
        this.#width = width;
        this.#height = height;
    }
    
    getArea() {
        return this.#width * this.#height;
    }
    
}
module.exports = Rectangle;

let shape = new Rectangle('Rectangle', 5, 5);
console.log(shape.getArea()); 