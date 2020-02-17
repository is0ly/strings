import sum from './index';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('sum correctly sums a big number', () => {
  expect(sum(1000, 2000)).toBe(1000);
});
