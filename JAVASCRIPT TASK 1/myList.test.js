const MyList = require('./myList.js');

let list;

beforeEach(() => {
  list = new MyList();
});

test('list is empty', () => {
  expect(list.isEmpty()).toBe(true);
});

test('add element', () => {
  list.add(4);
  list.add(6);
  expect(list.add(3)).toBe(3);
}); 

test('list is empty after add', () => {
  list.add(4);
  expect(list.isEmpty()).toBe(false);
});

test('size of list', () => {
  list.add(6);
  list.add(8);
  expect(list.size()).toBe(2);
});

test('size of empty list', () => {
  expect(list.size()).toBe(0);
})


test('get element at index', () => {
  list.add(6);
  list.add(2);
  expect(list.get(1)).toBe(2);
});


test('set elemem at index', () => {
  list.add(6);
  list.add(2);
  expect(list.set(1, 3)).toBe(3);
});

test('get element at index out of bounds', () => {
  list.add(6);
  list.add(2);
  expect(list.get(2)).toBe("Index out of bounds");
});

test('get element from empty list', () => {
  expect(list.get(0)).toBe("List is empty");
});
test('set element at index out of bounds', () => {
  list.add(6);
  list.add(2);
  expect(list.set(2, 3)).toBe("Index out of bounds");
});