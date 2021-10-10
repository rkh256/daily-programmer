const { lettersum } = require("./utils");

test('"" to equal 0', () => {
  expect(lettersum("")).toBe(0);
});

test('a to equal 1', () => {
  expect(lettersum("a")).toBe(1);
});

test('z to equal 26', () => {
  expect(lettersum("z")).toBe(26);
});

test('cab to equal 6', () => {
  expect(lettersum("cab")).toBe(6);
});

test('excellent to equal 100', () => {
  expect(lettersum("excellent")).toBe(100);
});

test('microspectrophotometries to equal 317', () => {
  expect(lettersum("microspectrophotometries")).toBe(317);
});