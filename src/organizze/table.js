const { filterCheckbox } = require('./checkbox');

const paintElement = el => {
  el.style = 'background-color: #f5f5f5 !important;';
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

  toggleRow(row);
  return getRowContent(row)
    .map(paintElement);
};

module.exports = {
  handleTableClick,
};
