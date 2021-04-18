const createCheckbox = (row) => {
  const checkbox = document.createElement('input');
  const checkboxStyle = `
    transform: translate(10px, 14px);
    margin-right: 15px;
  `;

  checkbox.setAttribute('type', 'checkbox');
  checkbox.style = checkboxStyle;

  return {
    row,
    checkbox,
  };
};

const prependCheckbox = ({ row, checkbox }) => {
  row.prepend(checkbox);
  return row;
};

const addCheckBox = (columnRows) => Array
  .from(columnRows)
  .map(createCheckbox)
  .map(prependCheckbox);

const filterCheckbox = el =>
  el.getAttribute('type') !== 'checkbox';

module.exports = {
  addCheckBox,
  filterCheckbox,
};
