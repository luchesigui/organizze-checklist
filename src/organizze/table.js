const { filterCheckbox } = require('./checkbox');

const paintElement = (el, color) => {
  el.style = `background-color: ${color} !important;`;
  return el;
};

const getRowContent = (row) => {
  const { children } = row;

  return Array
    .from(children)
    .filter(filterCheckbox);
};

const isActive = (el) =>
  el.getAttribute('checked');

const toggleRow = (el) => {
  if (isActive(el)) {
    el.removeAttribute('checked');
  } else {
    el.setAttribute('checked', true);
  }
};

const handleTableClick = ({ target }) => {
  if (target.getAttribute('type') !== 'checkbox') {
    return null;
  }

  const row = target.parentElement;
  const color = isActive(row) ? '#fff' : '#f5f5f5';

  toggleRow(row);
  return getRowContent(row)
    .map((rowContent) => paintElement(rowContent, color));
};

module.exports = {
  handleTableClick,
};
