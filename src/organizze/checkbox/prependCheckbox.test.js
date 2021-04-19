const prependCheckbox = require('./prependCheckbox');

it('should prepend checkbox to row', () => {
  // arrange
  const row = document.createElement('tr');
  const checkbox = document.createElement('input');

  // act
  const result = prependCheckbox({ row, checkbox });

  // assert
  const rowChildren = row.children;
  expect(rowChildren).toHaveLength(1);
  expect(rowChildren[0]).toBe(checkbox);
  expect(result).toBe(row);
});