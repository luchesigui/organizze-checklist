const filterCheckbox = require('./filterCheckbox');

it('should filter itens that are not checkboxes', () => {
  // arrange
  const inputCheckbox = document.createElement('input');
  inputCheckbox.setAttribute('type', 'checkbox');

  const inputText = document.createElement('input');
  inputText.setAttribute('type', 'text');

  const arrayWithCheckbox = [inputText, inputCheckbox, inputText];

  // act
  const result = arrayWithCheckbox.filter(filterCheckbox);

  // assert
  expect(result).toHaveLength(2);
});
