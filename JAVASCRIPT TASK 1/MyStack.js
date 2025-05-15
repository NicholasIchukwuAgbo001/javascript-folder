class MyStack {
  constructor() {
    this.elements = [];
    this.counter = 0;
  }

  isEmpty() {
    return this.counter === 0;
  }

  push(value) {
    this.elements[this.counter++] = value;
    return value;
  }

  
  pop() {
    if(this.isEmpty()) {
      return "Stack is empty";
    }
    return this.elements[--this.counter];
  }

  peek() {
    if(this.isEmpty()) {
      return "Stack is empty";
    }
    return this.elements[this.counter - 1];
  }

  size() {
    return this.counter;
  }

  search(value) {
    if(this.isEmpty()) {
      return "Stack is empty";
    }
    for (let count = 0; count < this.counter; count++) {
      if (this.elements[count] === value) {
        return count; 
      }
    }
    return "No such value"
  }

  clear() {
    this.elements = [];
    this.counter = 0;
  }

  remove(value) {
  for (let count = 0; count < this.counter; count++) {
      if (this.elements[count] === value) {
        this.elements.splice(count, 1);
        this.counter--;
        return value;
      }
    }
    return "No such value";
 }
}

module.exports = MyStack;