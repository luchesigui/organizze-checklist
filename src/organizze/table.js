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

const handleTableClick = ({ target }) => {
  if (target.getAttribute('type') !== 'checkbox') {
    return null;
  }

  const row = target.parentElement;
  return getRowContent(row)
    .map(paintElement);
};

module.exports = {
  handleTableClick,
};
