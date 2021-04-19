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

module.exports = createCheckbox;