const MyStack = require('./MyStack.js');

let stack;

beforeEach(() => {
  stack = new MyStack();
});

  test('stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
  });


  test('push', () => {
    stack.push(4);
    stack.push(6);
    expect(stack.push(3)).toBe(3);
  });


  test('stack is empty after push', () => {
    stack.push(4);
    expect(stack.isEmpty()).toBe(false);
  });

  test('pop', () => {
    stack.push(6);
    stack.push(8);
    stack.pop();
    expect(stack.pop()).toBe(6);
  });


  test('pop from empty stack', () => {
    expect(stack.pop()).toBe("Stack is empty");
  })

  test('stack is empty after pop', () => {
    stack.push(6);
    stack.push(8);
    stack.pop();
    expect(stack.isEmpty()).toBe(false);
  });

  test('stack is empty after pop ', () => {
    stack.push(6);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  test('peek', () => {
    stack.push(6);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  });

  test('peek from empty stack', () => {
    expect(stack.peek()).toBe("Stack is empty");
  })

  test('stack is empty after peek ', () => {
    stack.push(2);
    stack.push(9);
    stack.peek();
    expect(stack.isEmpty()).toBe(false);
  });

  test('size', () => {
    stack.push(2);
    stack.push(9);
    expect(stack.size()).toBe(2);
  });

  test('stack size is zero', () => {
    expect(stack.size()).toBe(0);
  });

  test('search', () => {
    stack.push(6);
    stack.push(8);
    stack.push(2);
    expect(stack.search(8)).toBe(1);
  });

  test('search from empty stack', () => {
    expect(stack.search(8)).toBe("Stack is empty");
  })

  test('search for 9', () => {
    stack.push(6);
    stack.push(8);
    stack.push(2);
    expect(stack.search(5)).toBe("No such value");
  });

  test('clear', () => {
    stack.push(6);
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
  });

  test('remove', () => {
    stack.push(6);
    stack.push(8);
    stack.push(2);
    expect(stack.remove(8)).toBe(8);
  });

  test('remove wrong value', () => {
    stack.push(6);
    stack.push(8);
    stack.push(2);
    expect(stack.remove(5)).toBe("No such value");
  });
